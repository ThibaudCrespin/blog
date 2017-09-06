<?php
    
	/* 
		This is an example class script proceeding secured API
		To use this class you should keep same as query string and function name
		Ex: If the query string value rquest=delete_user Access modifiers doesn't matter but function should be
		     function delete_user(){
				 You code goes here
			 }
		Class will execute the function dynamically;
		
		usage :
		
		    $object->response(output_data, status_code);
			$object->_request	- to get sanitized input
			
			output_data : JSON (I am using)
			status_code : Send status message for headers
			
		Add This extension for localhost checking :
			Chrome Extension : Advanced REST client Application
			URL : https://chrome.google.com/webstore/detail/hgmloofddffdnphfgcellkdfbfbjeloo
		
		I used the below table for demo purpose.
		
		CREATE TABLE IF NOT EXISTS `users` (
		  `user_id` int(11) NOT NULL AUTO_INCREMENT,
		  `user_fullname` varchar(25) NOT NULL,
		  `user_email` varchar(50) NOT NULL,
		  `user_password` varchar(50) NOT NULL,
		  `user_status` tinyint(1) NOT NULL DEFAULT '0',
		  PRIMARY KEY (`user_id`)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
 	*/
	
	require_once("Rest.inc.php");
	include_once ("config.php");

	class API extends REST {
	
		public $data = "";
		
		const DB_SERVER = parameters["database_host"];
		const DB_USER = parameters["database_user"];
		const DB_PASSWORD = parameters["database_password"];
		const DB = parameters["database_name"];
		
		private $db = NULL;
	
		public function __construct(){
			parent::__construct();// Init parent constructor
			$this->dbConnect();// Initiate Database connection
            date_default_timezone_set('France/Paris');
		}
		
		/*
		 *  Database connection 
		*/
		private function dbConnect(){
			$this->db = mysqli_connect(self::DB_SERVER,self::DB_USER,self::DB_PASSWORD);
			if($this->db){
                mysqli_select_db($this->db, self::DB);
                mysqli_set_charset($this->db, "utf8");
            }
		}
		
		/*
		 * Public method for access api.
		 * This method dynamically call the method based on the query string
		 *
		 */
		public function processApi(){
			$func = strtolower(trim(str_replace("/","",$_REQUEST['rquest'])));
			if((int)method_exists($this,$func) > 0)
				$this->$func();
			else
				$this->response('',404);// If the method not exist with in this class, response would be "Page not found".
		}

        /*
         *	CREATE Article
         *  article : <ARTICLE OBJECT>
         */

        private function add_article(){
            // Cross validation if the request method is POST else it will return "Not Acceptable" status
            if($this->get_request_method() != ("POST" || "OPTIONS")){
                $this->response('',406);
            }

            $article = json_decode(file_get_contents('php://input'));

            $request = "INSERT INTO article (title, header, author, content, picture) 
                        VALUES ('".addslashes($article->title)."','".addslashes($article->header)."',
                        '".addslashes($article->author)."','".addslashes($article->content)."','".$article->picture."')";

            if(mysqli_query($this->db, $request)){
                // If success everything is good send header as "OK" and return list of users in JSON format
                $success = array('status' => "Success", "content" => "Article créé avec succès.");
                $this->response($this->json($success), 201);
            }
            $error = array('status' => "Error", "content" => "La création de l'article a échoué.");
            $this->response($this->json($error),400);
        }

        /*
         *	DELETE Article
         *  id : <ARTICLE ID>
         */

        private function delete_article(){
            // Cross validation if the request method is DELETE else it will return "Not Acceptable" status
            if($this->get_request_method() != "GET"){
                $this->response('',406);
            }
            $id = (int)$this->_request['id'];
            if($id > 0){
                $request = "DELETE FROM article WHERE id = $id";
                mysqli_query($this->db, $request);
                $success = array('status' => "Success", "content" => "Article supprimé avec succès.");
                $this->response($this->json($success),200);
            }else
                $this->response('',204);	// If no records "No Content" status
        }

        /*
         *	GET Article
         *  id : <ARTICLE ID>
         */

        private function get_article(){
            // Cross validation if the request method is GET else it will return "Not Acceptable" status
            if($this->get_request_method() != "GET")
            {
                $this->response('',406);
            }
            // Get query params
            $id = (int)$this->_request['id'];
            // Create SQL request
            $request = "SELECT * FROM article WHERE id = $id";
            $sql = mysqli_query($this->db, $request);
            if(mysqli_num_rows($sql) > 0){
                $result = array();
                while($rlt = mysqli_fetch_array($sql,MYSQLI_ASSOC)){
                    $result = $rlt;
                }
                // If success everythig is good send header as "OK" and return list of users in JSON format
                $this->response($this->json($result), 200);
            }
            $this->response('',204);	// If no records "No Content" status
        }

        /*
         *	GET Articles
         *  No params
         */

        private function articles(){
            // Cross validation if the request method is GET else it will return "Not Acceptable" status
            if($this->get_request_method() != "GET")
            {
                $this->response('',406);
            }
            // Create SQL request
            $request = "SELECT * FROM article";
            $sql = mysqli_query($this->db, $request);
            if(mysqli_num_rows($sql) > 0){
                $result = array();
                while($rlt = mysqli_fetch_array($sql,MYSQLI_ASSOC)){
                    $result[] = $rlt;
                }
                // If success everythig is good send header as "OK" and return list of users in JSON format
                $this->response($this->json($result), 200);
            }
            $this->response('',204);	// If no records "No Content" status
        }

        /*
         *	CREATE Comment
         *  comment : <COMMENT OBJECT>
         */

        private function add_comment(){
            // Cross validation if the request method is POST else it will return "Not Acceptable" status
            if($this->get_request_method() != ("POST" || "OPTIONS")){
                $this->response('',406);
            }

            $comment = json_decode(file_get_contents('php://input'));

            $request = "INSERT INTO comment (article_id, author, content) VALUES (".$comment->article_id.",'".addslashes($comment->author)."','".addslashes($comment->content)."')";

            if(mysqli_query($this->db, $request)){
                // If success everything is good send header as "OK" and return list of users in JSON format
                $success = array('status' => "Success", "content" => "Commentaire créé avec succès.");
                $this->response($this->json($success), 201);
            }
            $error = array('status' => "Error", "content" => "La création du commentaire a échoué.");
            $this->response($this->json($error),400);
        }

        /*
         *	DELETE Comment
         *  id : <COMMENT ID>
         */

        private function delete_comment(){
            // Cross validation if the request method is DELETE else it will return "Not Acceptable" status
            if($this->get_request_method() != "GET"){
                $this->response('',406);
            }
            $id = (int)$this->_request['id'];
            if($id > 0){
                $request = "DELETE FROM comment WHERE id = $id";
                mysqli_query($this->db, $request);
                $success = array('status' => "Success", "content" => "Commentaire supprimé avec succès.");
                $this->response($this->json($success),200);
            }else
                $this->response('',204);	// If no records "No Content" status
        }

        /*
         *	GET Comments
         *  article : <ARTICLE ID>
         */

        private function comments(){
            // Cross validation if the request method is GET else it will return "Not Acceptable" status
            if($this->get_request_method() != "GET")
            {
                $this->response('',406);
            }
            // Get query params
            $article_id = (int)$this->_request['article'];
            // Create SQL request
            $request = "SELECT * FROM comment WHERE article_id= $article_id";
            $sql = mysqli_query($this->db, $request);
            if(mysqli_num_rows($sql) > 0){
                $result = array();
                while($rlt = mysqli_fetch_all($sql,MYSQLI_ASSOC)){
                    $result = $rlt;
                }
                // If success everythig is good send header as "OK" and return list of users in JSON format
                $this->response($this->json($result), 200);
            }
            $this->response('',204);	// If no records "No Content" status
        }
		
		/*
		 *	Encode array into JSON
		*/
		private function json($data){
			if(is_array($data)){
				return json_encode($data);
			}
		}
	}
	
	// Initiate Library
	
	$api = new API;
	$api->processApi();
?>