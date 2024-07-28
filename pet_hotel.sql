-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 31 2024 г., 12:36
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `pet_hotel`
--

-- --------------------------------------------------------

--
-- Структура таблицы `gallery`
--

CREATE TABLE `gallery` (
  `ID` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT current_timestamp(),
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `gallery`
--

INSERT INTO `gallery` (`ID`, `image`, `createdAt`, `updatedAt`, `description`) VALUES
(1, 'https://img.freepik.com/premium-photo/dog-training_650851-2134.jpg?w=900', '2024-01-15', '2024-01-15', 'AAAAAAAAAAAAAAAAAA'),
(2, 'https://img.freepik.com/premium-photo/dog-training_650851-2134.jpg?w=900', NULL, NULL, NULL),
(3, 'https://img.freepik.com/premium-photo/dog-training_650851-2134.jpg?w=900', NULL, NULL, NULL),
(4, 'https://img.freepik.com/premium-photo/dog-training_650851-2134.jpg?w=900', NULL, NULL, NULL),
(5, 'https://img.freepik.com/premium-photo/dog-training_650851-2134.jpg?w=900', NULL, NULL, NULL),
(6, 'https://img.freepik.com/premium-photo/dog-training_650851-2134.jpg?w=900', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `reservation`
--

CREATE TABLE `reservation` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `inDate` datetime NOT NULL,
  `outDate` datetime NOT NULL,
  `animalType` enum('Кошка','Собака') NOT NULL,
  `status` enum('Active','inactive') NOT NULL,
  `serviceID` int(11) NOT NULL,
  `note` text DEFAULT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `reservation`
--

INSERT INTO `reservation` (`ID`, `userID`, `inDate`, `outDate`, `animalType`, `status`, `serviceID`, `note`, `createdAt`, `updatedAt`) VALUES
(1, 3, '2024-01-17 10:00:00', '2024-01-17 17:00:00', 'Собака', 'Active', 1, 'Погладьте его сто раз.', '2024-01-15', '2024-01-15'),
(2, 4, '2024-01-16 10:09:14', '2024-01-18 10:09:14', 'Кошка', 'Active', 2, 'Кормить только премиум-кормом.', '2024-01-15', '2024-01-15'),
(6, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Кошка', 'Active', 1, 'Пометка', '2024-01-23', '2024-01-23');

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

CREATE TABLE `reviews` (
  `ID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `text` text NOT NULL,
  `serviceID` int(11) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `reviews`
--

INSERT INTO `reviews` (`ID`, `userID`, `text`, `serviceID`, `createdAt`, `updatedAt`) VALUES
(80, 9, 'Наконец-то нашел место, где мой собакен чувствует себя как дома. Спасибо за заботу!', 1, '2024-01-31', '2024-01-31'),
(81, 9, 'Мой пудель просто в восторге от SPA-ухода! Он выглядит и чувствует себя прекрасно после каждого визита. Профессиональный персонал и широкий спектр услуг - рекомендую!', 3, '2024-01-31', '2024-01-31'),
(82, 9, 'Наш котенок стал более активным и социальным после посещения игрового клуба. Профессиональные смотрители и разнообразные игры делают этот клуб настоящим райским местом для питомцев!', 4, '2024-01-31', '2024-01-31'),
(83, 9, 'Заботливый персонал, интересные игры, и всегда радостный питомец по возвращению домой!', 2, '2024-01-31', '2024-01-31');

-- --------------------------------------------------------

--
-- Структура таблицы `services`
--

CREATE TABLE `services` (
  `ID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `services`
--

INSERT INTO `services` (`ID`, `title`, `description`, `price`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Дневная Передержка', 'Ваш пушистый друг будет наслаждаться дневной заботой и вниманием в нашей гостинице. Включает игровое время, прогулки и уход за питомцем.', '10.00', 'https://img.freepik.com/free-photo/cute-pet-collage-isolated_23-2150007407.jpg?w=740&t=st=1705090874~exp=1705091474~hmac=5b096fb1414f8dc2e2c0b1cdb4732edadebab6da79ff02f4f294028d3c79cd97', NULL, NULL),
(2, 'Суточная Передержка', 'Гарантируем комфорт и заботу в течение всей ночи. Просторные номера с удобными кроватями, регулярные прогулки и кормление по графику.', '25.00', 'https://img.freepik.com/premium-photo/japanese-dog-shiba-inu-sleeps-cutely-cute-japanese-red-dog_258431-223.jpg', NULL, NULL),
(3, 'СПА-Уход', 'Наши квалифицированные специалисты предоставят вашему питомцу роскошные процедуры ухода, включая массаж, гидротерапию и ароматерапию. Расслабьтесь, зная, что вашему пушистому другу предоставлены высококачественные услуги ухода.', '30.00', 'https://img.freepik.com/free-photo/woman-shears-dog-dog-sitting-couch-breed-yorkshire-terrier_1157-46558.jpg?w=900&t=st=1705090458~exp=1705091058~hmac=5551f3f98f41a1fe743672ecde812ffd14fcbf7f2bb8c55ce316e8bd7261d0c4', NULL, NULL),
(4, 'Игровой Клуб \"Хвостатые Приключения\"', 'Наш клуб предоставляет широкий выбор игр и развлечений для питомцев всех размеров и пород. От мягких игрушек до интерактивных тренажеров — у нас есть всё, чтобы удовлетворить любые потребности в игре. Наши опытные смотрители бдительно следят за каждым участником клуба, обеспечивая безопасность и обогащающий опыт. Они активно взаимодействуют с животными, играют с ними и следят за тем, чтобы каждый питомец чувствовал себя как дома.', '10.00', 'https://img.freepik.com/premium-photo/dogs-playing-grass-group-dogs-together_357532-1781.jpg?w=900', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','employee','client') NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`ID`, `name`, `email`, `role`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'admin@mail.ee', 'admin', '$2b$10$0A3DWw0E6LpMoX/s6K7tK.C2D/8P7sMArkW8qWcJjozuno4shUPHu', '2023-12-14 00:00:00', '2023-12-14 00:00:00'),
(2, 'Lera Bulka', 'Lerbulka@mail.ee', 'employee', '$2b$10$0A3DWw0E6LpMoX/s6K7tK.C2D/8P7sMArkW8qWcJjozuno4shUPHu', '2023-12-14 00:00:00', '2023-12-14 00:00:00'),
(3, 'Aleksei', 'lexa@mail.ee', 'client', '$2b$10$0A3DWw0E6LpMoX/s6K7tK.C2D/8P7sMArkW8qWcJjozuno4shUPHu', '2023-12-14 00:00:00', '2023-12-14 00:00:00'),
(4, 'Dzessika', 'Dzess@mail.ee', 'employee', '$2b$10$0A3DWw0E6LpMoX/s6K7tK.C2D/8P7sMArkW8qWcJjozuno4shUPHu', '2023-12-14 00:00:00', '2023-12-14 00:00:00'),
(9, 'Test', 'test@mail.ee', 'admin', '$2b$10$0A3DWw0E6LpMoX/s6K7tK.C2D/8P7sMArkW8qWcJjozuno4shUPHu', '2024-01-12 00:00:00', '2024-01-12 00:00:00'),
(10, 'Arnold', 'arnold@ee.ee', 'admin', '$2b$10$i1cbkhyfguov9mGp50Y6S.NCro0BdmGf/DUGioxFpxGf5tLCSdLb2', '2024-01-15 08:52:26', '2024-01-15 08:52:26'),
(11, 'mjau', 'mjau@mail.ee', 'admin', '$2b$10$htWfGnxK6VxK8e2I/TnkxulDUAR4jpRQt0rJ5QxD/2aQ.h5QOgcyi', '2024-01-30 08:34:55', '2024-01-30 08:34:55'),
(12, 'test', 'test@mail.ee', 'admin', '$2b$10$a1uOhHOorLPO4AL2FtDqG.pBjmX78WMkcZjzWPaVc2JGKw97/JB.u', '2024-01-30 08:38:55', '2024-01-30 08:38:55'),
(13, 'test2', 'test2@mail.ee', 'admin', '$2b$10$MnhM.zILlSB7G5LA7Bw21OxDyyYPTFBS8rkPT15cSo0yr5GYEe2MS', '2024-01-30 08:48:01', '2024-01-30 08:48:01'),
(14, 'test2', 'test2@mail.ee', 'admin', '$2b$10$ZTTOvOfr2RpNvwGotTowLeq3TIj7qRJeHU5mPF0hYaSKO6cntFG0m', '2024-01-30 08:49:02', '2024-01-30 08:49:02'),
(15, 'test2', 'test2@mail.ee', 'admin', '$2b$10$5HjfQpHCs12JxV/1ql3OHe2eXNj9nvhXjEu/Vu9yZUxAXJ4lbWd1a', '2024-01-30 11:18:27', '2024-01-30 11:18:27'),
(16, 'test2', 'test2@mail.ee', 'admin', '$2b$10$2D2qy1Xo1fYL9bHBfe1lXe2gb3BaT6/.AU6DOy35Rbyac2/630GO2', '2024-01-30 11:19:12', '2024-01-30 11:19:12'),
(17, 'test2', 'test2@mail.ee', 'admin', '$2b$10$9a4Dc7p1vIYK4s/q0JFc3uxgdqNBysoe6MoaaWfPk9gpDHba.SThm', '2024-01-30 11:22:59', '2024-01-30 11:22:59');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`userID`),
  ADD KEY `ServiceID` (`serviceID`);

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UserID` (`userID`),
  ADD KEY `ServiceID` (`serviceID`);

--
-- Индексы таблицы `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `gallery`
--
ALTER TABLE `gallery`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `reservation`
--
ALTER TABLE `reservation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`serviceID`) REFERENCES `services` (`ID`),
  ADD CONSTRAINT `reservation_ibfk_3` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `reservation_ibfk_4` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservation_ibfk_5` FOREIGN KEY (`serviceID`) REFERENCES `services` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`serviceID`) REFERENCES `services` (`ID`),
  ADD CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
