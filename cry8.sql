-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2022 at 05:53 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cry8`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(70) NOT NULL,
  `twitter` varchar(70) NOT NULL,
  `facebook` varchar(70) NOT NULL,
  `medium` varchar(70) NOT NULL,
  `role` varchar(20) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `twitter`, `facebook`, `medium`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'okaynhsw@yah.com', '$2a$10$AnI3/hZxdbx2IaOZDwMGw.RU0YlcXILVn9yqYvw1BE7tqlpFoR/0m', '', '', '', 'admin', '2022-10-24 03:16:03', '2022-10-24 03:16:03'),
(2, 'okaynhswahcom', '$2a$10$eM51kmKpcpNfUWj2EcYPfO3sQWvD543OKzIm49l//l7vyenhS1NEm', '', '', '', 'admin', '2022-10-24 03:17:26', '2022-10-24 03:17:26'),
(3, 'okaynhswahgtom', '$2a$10$mJnTcprn8Bv/hBY5unnnbut7AG7yyuy32tCgUC1RF56NQ6LDmR6DG', '', '', '', 'admin', '2022-10-24 03:30:00', '2022-10-24 03:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `buckets`
--

CREATE TABLE `buckets` (
  `id` int(11) NOT NULL,
  `wordPhrase` varchar(70) NOT NULL,
  `contents` varchar(10000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buckets`
--

INSERT INTO `buckets` (`id`, `wordPhrase`, `contents`, `createdAt`, `updatedAt`) VALUES
(1, '0', '0', '2022-10-24 03:47:07', '2022-10-24 03:47:07'),
(2, 'okaynhswahgtom', 'onsdsdfd', '2022-10-24 03:48:04', '2022-10-24 03:48:04');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `code` varchar(10) NOT NULL,
  `status` varchar(5) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `topic` varchar(40) NOT NULL,
  `contents` varchar(10000) NOT NULL,
  `category` varchar(30) NOT NULL,
  `image` varchar(32) NOT NULL,
  `tags` varchar(12) NOT NULL,
  `postedBy` varchar(40) NOT NULL,
  `likes` int(20) NOT NULL,
  `dislike` int(20) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `topic`, `contents`, `category`, `image`, `tags`, `postedBy`, `likes`, `dislike`, `createdAt`, `updatedAt`) VALUES
(10, 'okaydwahgtom', 'okaynhswahgtomd', 'onsdsdfd', 'uploads\\1666664464905.PNG', 'vokaynhswahg', 'onsdsdfd', 0, 0, '2022-10-25 02:21:04', '2022-10-25 02:21:04'),
(11, 'okaydwahgto', 'okaynhswahgtomd', 'onsdsdfd', 'uploads\\1666664625924.PNG', 'vokaynhswahg', 'onsdsdfd', 0, 0, '2022-10-25 02:23:45', '2022-10-25 02:23:45'),
(12, 'okaydwhgto', 'okaynhswahgtomd', 'onsdsdfd', 'uploads\\1666664646827.PNG', 'vokaynhswahg', 'onsdsdfd', 0, 0, '2022-10-25 02:24:06', '2022-10-25 02:24:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buckets`
--
ALTER TABLE `buckets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `buckets`
--
ALTER TABLE `buckets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
