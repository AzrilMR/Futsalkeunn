-- CreateTable
CREATE TABLE `aksesoris` (
    `id_aksesoris` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_aksesoris` VARCHAR(191) NOT NULL,
    `deskripsi_aksesoris` VARCHAR(191) NOT NULL,
    `harga_aksesoris` INTEGER NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_aksesoris`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
