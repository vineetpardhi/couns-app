-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2019 at 10:50 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `counsel`
--

-- --------------------------------------------------------

--
-- Table structure for table `counsellee`
--

CREATE TABLE `counsellee` (
  `name` varchar(20) NOT NULL,
  `DOB` date NOT NULL,
  `college` varchar(40) NOT NULL,
  `qualification` varchar(20) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `preference1` varchar(20) NOT NULL,
  `preference2` varchar(20) NOT NULL,
  `preference3` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `usertype` varchar(2) NOT NULL,
  `profile` varchar(1000) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `counsellor`
--

CREATE TABLE `counsellor` (
  `name` varchar(20) NOT NULL,
  `qualification` varchar(30) NOT NULL,
  `workingstate` varchar(30) NOT NULL,
  `YOE` int(10) NOT NULL,
  `field1` varchar(20) NOT NULL,
  `field2` varchar(20) NOT NULL,
  `field3` varchar(20) NOT NULL,
  `rating` int(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `usertype` varchar(2) NOT NULL,
  `password` varchar(20) NOT NULL,
  `profile` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `counsellor`
--

INSERT INTO `counsellor` (`name`, `qualification`, `workingstate`, `YOE`, `field1`, `field2`, `field3`, `rating`, `username`, `usertype`, `password`, `profile`) VALUES
('kewal shah', 'B.tech ', 'CEO', 12, 'ML', 'AI', 'ANALYST', 4, 'kewal18', 'CR', '110', 'https://images.app.goo.gl/G1qyBn6HywTBaLJEA'),
('vaibhav pudke', 'B.tech ', 'Director', 10, 'digital marketing', 'entrepenurship', 'trader', 5, 'vaibhav007', 'CR', '110', 'https://images.app.goo.gl/JtH85WBajHYfudJz7'),
('vineet pardhi', 'MBA', 'CEO', 11, 'Digital Marketing', 'Technology Managemen', 'Entrepreneurship', 8, 'vineet12', 'CR', 'vineet1212', 'https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `usertype` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `usertype`) VALUES
('kewal18', '110', 'CR'),
('vaibhav007', '110', 'CR'),
('vineet12', '110', 'CE');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
