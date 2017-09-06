-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 06 sep. 2017 à 17:18
-- Version du serveur :  5.7.17
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog_thibaud`
--
CREATE DATABASE IF NOT EXISTS `blog_thibaud` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `blog_thibaud`;

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(250) COLLATE utf8_bin NOT NULL,
  `header` varchar(250) COLLATE utf8_bin NOT NULL,
  `author` varchar(100) COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `picture` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `title`, `header`, `author`, `content`, `creation_date`, `picture`) VALUES
(1, 'Qu\'est-ce que le Lorem Ipsum?', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.', 'Jesus Christ', 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.', '2017-09-04 00:00:00', 'https://www.senegal7.com/wp-content/uploads/2017/05/jesus-5.jpg'),
(2, 'Vivamus libero sem', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', 'John Cena', 'Quisque sagittis, velit vel posuere condimentum, ligula ex laoreet elit, a ultricies augue est quis elit. Aenean placerat tincidunt mattis. Maecenas eu erat egestas, placerat sem ut, iaculis diam. Quisque tincidunt semper nibh, vitae porttitor purus gravida tincidunt. Quisque accumsan ac justo eu ornare. Vestibulum diam ipsum, rutrum eget condimentum sit amet, sodales vel eros. Aenean id sem auctor, laoreet massa et, volutpat mi.', '2017-09-04 14:59:23', 'https://www.popwebdesign.net/popart_blog/wp-content/uploads/2016/05/lorem-ipsum-filler-text.jpg'),
(3, 'Good Morning Vietnam', 'Hello World', 'Robin Williams', 'Vivamus libero sem, imperdiet congue enim eget, maximus iaculis est. Suspendisse vel nisl varius, malesuada orci porta, porttitor nibh. Curabitur eu hendrerit odio. Mauris eleifend nisl eu ultricies volutpat. Sed in posuere mauris. Donec nunc ante, fermentum rutrum nibh eu, volutpat lobortis risus. In viverra accumsan dui, ut consequat orci ornare eu. Suspendisse massa tortor, egestas in ligula quis, molestie ultricies nisl. Vivamus in auctor diam. Pellentesque accumsan fringilla tempus. Fusce faucibus felis sed arcu viverra, at aliquam justo tempus. Duis luctus erat ligula, quis mollis.', '2017-09-06 15:10:32', 'http://i.telegraph.co.uk/multimedia/archive/03267/goodmorningvietnam_3267410k.jpg'),
(4, 'Mon alternance', 'Effectuée en Licence Pro IRM à l\'IUT de la Rochelle et à BiiG Stratégie Digitale', 'Thibaud Crespin', 'J\'ai effectué une alternance chez BiiG Stratégie Digitale. \nNous somme spécialisés dans le développement d\'applications utilisant un front angular et un back + api symfony.\nL\'intégration est faite par les intégrateurs mais j\'ai eu l\'occasion d\'intégrer quelques morceaux d\'applications.\nLe plus gros projet auquel j\'ai participé s\'appelle KiiX (voir kiix.org), un package d\'outils dédiés aux conférences interactives.', '2017-09-06 17:08:34', 'https://www.biig.fr/wp-content/uploads/hd_small.jpg'),
(5, 'Les flux HTML', 'Définition d\'une notion', 'Thibaud Crespin', 'Le flux correspond à l\'écoulement des informations (ou données) dans le processus d\'interprétation des navigateurs. En toute logique, un navigateur commence par le haut de la page, place les éléments (balises) qu\'il rencontre les unes à la suite des autres, de gauche à droite puis de haut en bas, à ceci près que cela dépend si ce sont des balises bloc ou en-ligne.', '2017-09-06 17:11:06', 'http://www.innovafire.com/sites/default/files/blog/html.jpg'),
(6, 'Positionnement', 'Résumé des différentes techniques de positionnement CSS', 'Thibaud Crespin', 'Le positionnement flottant : float ! Il sert à placer des éléments qui n\'ont aucune attache.\nLe positionnement block/inline-block. Les éléments sont placés de manière carrée et très structurée\nLe flexbox, aujourd\'hui le plus adopté car très pratique, permets des tas de modes de positionnement que ne proposent pas les autres, comme centrer au début, etc', '2017-09-06 17:16:54', 'http://cours-web.ch/cours-css/img/css-is-awesome.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `author` varchar(250) COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `article_id`, `author`, `content`, `creation_date`) VALUES
(1, 1, 'Donald Trump', 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans.', '2017-09-04 00:00:00'),
(3, 2, 'Michael Jackson', 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard', '2017-09-04 14:39:36'),
(4, 1, 'Michael Jordan', 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard', '2017-09-04 16:12:29'),
(13, 1, 'Thibaud Crespin', 'Bonjour bonjour', '2017-09-06 14:43:25'),
(15, 3, 'Bob l\'éponge', 'Salut Patrick ! L\'eau est bonne ?', '2017-09-06 15:36:33');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
