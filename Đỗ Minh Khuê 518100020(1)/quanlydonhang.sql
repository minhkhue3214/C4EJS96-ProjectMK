-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 17, 2020 lúc 02:45 PM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quanlydonhang`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `madon` varchar(20) NOT NULL,
  `makh` varchar(20) NOT NULL,
  `manv` varchar(20) NOT NULL,
  `ngaydat` date NOT NULL,
  `gia` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`madon`, `makh`, `manv`, `ngaydat`, `gia`) VALUES
('md1', 'mk1', 'nv1', '2020-10-20', 23000),
('md44', 'mk1', 'nv2', '2020-10-20', 22222),
('md44', 'mk1', 'nv2', '2020-10-20', 22222),
('md44', 'mk1', 'nv2', '2020-10-20', 22222),
('md44', 'mk1', 'nv2', '2020-10-20', 22222);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `makh` varchar(10) NOT NULL,
  `hoten` varchar(20) NOT NULL,
  `gioitinh` varchar(4) NOT NULL,
  `diachi` varchar(20) NOT NULL,
  `sodt` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`makh`, `hoten`, `gioitinh`, `diachi`, `sodt`) VALUES
('mk2', 'Mai Huy', '', 'Lào Cai', 947418701),
('mk2', 'Mai Huy', '', 'Lào Cai', 947418701),
('mk2', 'Mai Huy', 'nữ', 'Lào Cai', 947418701);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `manv` varchar(20) NOT NULL,
  `hoten` varchar(20) NOT NULL,
  `ngaysinh` date NOT NULL,
  `sdt` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
