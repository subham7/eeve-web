-- MySQL dump 10.13  Distrib 8.0.18, for osx10.13 (x86_64)
--
-- Host: 127.0.0.1    Database: eeve
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dealers1`
--

DROP TABLE IF EXISTS `dealers1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dealers1` (
  `SlNo` int(11) DEFAULT NULL,
  `Code` int(11) DEFAULT NULL,
  `AM` text COLLATE utf8mb4_general_ci,
  `AMService` text COLLATE utf8mb4_general_ci,
  `TradeName` text COLLATE utf8mb4_general_ci,
  `FirmName` text COLLATE utf8mb4_general_ci,
  `Location` text COLLATE utf8mb4_general_ci,
  `Dist` text COLLATE utf8mb4_general_ci,
  `State` text COLLATE utf8mb4_general_ci,
  `DPName` text COLLATE utf8mb4_general_ci,
  `Contact Person` text COLLATE utf8mb4_general_ci,
  `Mob` double DEFAULT NULL,
  `PersonalID` text COLLATE utf8mb4_general_ci,
  `PAN` text COLLATE utf8mb4_general_ci,
  `GSTNo` text COLLATE utf8mb4_general_ci,
  `DealerAddress` text COLLATE utf8mb4_general_ci,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `StateId` int(11) DEFAULT NULL,
  `DistId` int(11) DEFAULT NULL,
  KEY `dealers1_state_id_fk` (`StateId`),
  KEY `dealers1_district_id_fk` (`DistId`),
  CONSTRAINT `dealers1_district_id_fk` FOREIGN KEY (`DistId`) REFERENCES `district` (`id`),
  CONSTRAINT `dealers1_state_id_fk` FOREIGN KEY (`StateId`) REFERENCES `state` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dealers1`
--

LOCK TABLES `dealers1` WRITE;
/*!40000 ALTER TABLE `dealers1` DISABLE KEYS */;
INSERT INTO `dealers1` VALUES (1,37000107,'Abraham','Kiran','KVR EeVe','KVR Motors','Srikakulam','Srikakulam','Andhra Pradesh','Mr. Kovvuri Veera Raghava Reddy',NULL,9908815444,'raghavareddy9999@gmail.com','GEWPK2874E','37GEWPK2874E1ZU','Sri Venkata Laxmi Nivas, Pedapadu Road, Near Harika In Kalyanmadapam, Srikakulam, Andhra Pradesh - 532401',18.3048137,83.9107421,1,1),(2,37000109,'Abraham','Kiran','VB EeVe','VB Motors','Vishakhapatnam','Vishakhapatnam','Andhra Pradesh','Mr. Kovvuri Venkata Reddy','Mr. Somu Reddy',9035223789,'kvreddy6699@gmail.com','AJTPK8169L','37AJTPK8169L1Z5','45-56-1/5/1, GSP Complex, 2nd Floor, Flat No:301, Near Port Hospital, Narasimha Nagar Highway, Akkayyapalem, Vishakhapatnam, Andhra Pradesh - 530024',17.7393227,83.2923849,1,2),(3,37000110,'Abraham','Kiran','Varahi EeVe','Varahi Motors','Rajahmundry','East Godavari','Andhra Pradesh','Mr. Karri Srinivasa Reddy',NULL,7901495555,'ramachandra.reddy@live.com','CIAPK8827M','37CIAPK8827M1ZP','Anaparthi Mandal, Koppavaram Village, Rajahmundry, East Godavari, Andhra Pradesh - 533005',16.9700519,81.9440973,1,3),(4,37000120,'Abraham','Kiran','Guda EeVe','Guda Agencies','Eluru','West Godavari','Andhra Pradesh','Mr. GNS Krishna Mohan',NULL,9502419368,'Krishnamohanguda@gmail.com','ALHPM6387L','37ALHPM6387L1ZB','Shop No.13, ZPP Complex, Indoor Stadium Road, Eluru, West Godavari, Andhra Pradesh - 534006',16.7110518,81.089014,1,4),(5,37000108,'Abraham','Kiran','BKR EeVe','BKR Automobiles','Vizianagaram','Vizianagaram','Andhra Pradesh','Mr. Grandhi Sarvarayudu Gupta',NULL,9849988173,'gupta651971@gmail.com','AEOPG4707J','37AEOPG4707J1Z9','Ground Floor, 8-1-93/94, MG Road, Vizianagaram, Andhra Pradesh - 535001',18.1163582,83.4035129,1,5),(6,18000111,'Monjit','Ayan','Shree EeVe','Shree E - Bikes','Nagaon','Nagaon','Assam','Mr. Vinod Kumar Verma',NULL,9864888886,'ashish123.85@gmail.com; shreenagaonebikes@gmail.com','ABBPV5282B','18ABBPV5282B1ZM','Laukhowa Road, Near Pani Tanky, Haibargaon, Nagaon, Assam - 782002',26.35007,92.6719603,6,6),(7,18000112,'Monjit','Ayan','Wings EeVe','Wings EeVe','Jorhat','Jorhat','Assam','Mr. Devorup Baruah',NULL,6001848871,'bdevorup@gmail.com','AEAPB8452M','18AEAPB8452M2ZB','Jail Road, Jorhat, Assam - 785001',26.7420626,94.197462,6,7),(8,18000113,'Monjit','Ayan','Kamrup EeVe','EeVe Kamrup','Guwahati','Kamrup','Assam','Miss. Ayushree Baruah','Mr. Diganta Baruah',7086043950,'ayushree009baruah@gmail.com; diganta09baruah@gmail.com','ABKFM5182C',NULL,'N.H.-37, Near Sarusajai Stadium, Guwahati, Kamrup Metropolitan, Assam - 781024',26.1157502,91.7580619,6,8),(9,21000102,'Saubhagya','Kiran','Sakambari EeVe','Sakambari Automobiles Pvt. Ltd.','Cuttack','Cuttack','Odisha','Mr. Rahul Kumar Gupta',NULL,8895714483,'sakambariautomobiles@gmail.com','AAYCS0740G','21AAYCS0740G1ZD','Plot no-2147, Payton Sahi, Haripur Road, Cuttack, Odisha-753001',20.4676977,85.8719609,4,9),(10,21000101,'Saubhagya','Kiran','Anjali EeVe','Anjali Enterprises','Bhubaneswar','Khordha','Odisha','Mr. Abhishek Pani',NULL,9861303737,'abhishek.pani93@gmail.com','CIGPP8275G','21CIGPP8275G1Z2','D-2/2, Rasulgarh Industrial Estate, Rasulgarh, Bhubaneswar, Khordha, Odisha - 751010',20.2898483,85.8502066,4,10),(11,21000103,'Saubhagya','Kiran','Xclusive EeVe','Xclusive EeVe','Puri','Puri','Odisha','Mr. Bibudha Ranjan Mohapatra',NULL,8763300643,'adlibpuri@gmail.com','ABDPM4502B','21ABDPM4502B2ZK','Before Bira Harekrushnapur Chhaka, Opposite Indian Oil Petrol Pump, Puri, Odisha - 752002',19.8489045,85.8536374,4,11),(12,21000104,'Saubhagya','Kiran','B & K EeVe','B & K Enterprises','Sambalpur','Sambalpur','Odisha','Mr. Kishore Agrawal','Mr. Biswajit Panda',9861764200,'bkenterprisesburla@gmail.com','AATFB3344D','21AATFB3344D1ZT','Near Hirakud Railway Station, NH-6, Besides Of Golgunda, Burla, Sambalpur, Odisha - 768017',21.480628,83.9032103,4,12),(13,21000105,'Saubhagya','Kiran','OM EeVe','Om Automobiles','Angul','Angul','Odisha','Mr. Pradeepta Tripathy',NULL,9937202223,'pradeepta.t@gmail.com','ACYPT9423E',NULL,'Infront of Hingula Temple, Turanga Chhaka, Angul, Odisha - 759123',20.888035,85.0530199,4,13),(14,21000106,'Saubhagya','Kiran','Maa EeVe','Maa Automobiles','Dhenkanal','Dhenkanal','Odisha','Mr. Pradeepta Tripathy',NULL,9937202223,'pradeepta.t@gmail.com','BCVPB7431C',NULL,'Near Bus stand, Amalapada Road, Dhenkanal, Odisha - 759001',20.6536085,85.5972732,4,14),(15,21000121,'Saubhagya','Kiran','Avantika EeVe','Avantika Motors','Keonjhar','Keonjhar','Odisha','Mr. Amit Kumar Mishra','Mr. Raja',9264412612,'avantikamotors.eeve@gmail.com','AJJPM8349J','21AJJPM8349J2ZV','Opposite Keonjhar RTO Office, Keonjhar, Odisha - 758002',21.6303388,85.6119503,4,15),(17,19000114,'Soumya','Soumen','Raj & Rajanya EeVe','Raj & Rajanya EeVe','Barobisha','Alipurduar','West Bengal','Mr. Badal Das',NULL,8167887800,'badaldasbarobisha@gmail.com','AYVPD4047M','19AYVPD4047M1ZR','NH-31C, Near Indian Oil Petrol Pump, Barobisha, Alipurduar, West Bengal - 736207 ',26.471845,89.8050396,5,17),(18,19000115,'Soumya','Soumen','Tara EeVe','Tara EeVe','Bagnan','Howrah','West Bengal','Mr. Sandip Garai','Mr. Priyajit Garai',9330106119,'p_garai@yahoo.co.in','AQBPG6274B','19AQBPG6274B2Z1','O.T Road, Beside Axis Bank, Bagnan, Howrah, West Bengal - 711303',22.4681046,87.9665548,5,18),(19,19000116,'Soumya','Soumen','Navya EeVe','Navya Automobiles','Behala (Kolkata)','South 24 Parganas','West Bengal','Mrs. Anjana Guha','Mr. Amalendu Guha',9874408700,'anandinternational482@gmail.com','AGAPG6360M','19AGAPG6360M1Z6','233, Diamond Harbour Road, Behala, Pathakpara, Kolkata, South 24 Parganas, West Bengal - 700034',21.9483111,88.0446708,5,19),(20,19000117,'Suman','Soumen','Subham EeVe','Subham Auto','Durgapur','West Burdwan','West Bengal','Mr. Subham Mukherjee',NULL,9734446666,'mukherjeesubham925@gmail.com','CVLPM2880G','19CVLPM2880G1Z4','Sanjib Sarani, Santiban Park, Jharna Complex, Durgapur-1, West Burdwan, West Bengal - 713201',23.5067802,87.3315637,5,20),(21,19000118,'Soumya','Soumen','Hiya EeVe','Hiya Motors','Kharagpur','Paschim Medinipur','West Bengal','Mr. Dipsankar Konar',NULL,9647273247,'dipsankarkonar1993@gmail.com','CBSPK5422R','19CBSPK5422R1ZP','Satkui, Kharagpur (Local), O. T. Road, NH-60, Dist-Paschim Medinipur, West Bengal - 721301',22.3447118,87.2915944,5,21),(22,19000119,'Soumya','Soumen','Speed EeVe','Speed Auto Service Pvt. Ltd.','Kolkata - Central','Kolkata','West Bengal','Mr. Atul Makharia',NULL,9831035600,'atul@speedinc.in','AAJCS0090E','19AAJCS0090E1ZE','8 Beck Bagan Row, Ground Floor, Kolkata, West Bengal - 700017',22.5404066,88.3582266,5,22);
/*!40000 ALTER TABLE `dealers1` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-08 15:36:01
