-- CreateTable
CREATE TABLE `sepatu` (
    `id_sepatu` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_sepatu` VARCHAR(191) NOT NULL,
    `warna_sepatu` VARCHAR(191) NOT NULL,
    `uk_sepatu` VARCHAR(191) NOT NULL,
    `deskripsi_sepatu` VARCHAR(191) NOT NULL,
    `harga_sepatu` INTEGER NOT NULL,
    `gambar_sepatu` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_sepatu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
