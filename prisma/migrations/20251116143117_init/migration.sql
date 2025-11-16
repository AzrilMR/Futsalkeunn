-- CreateTable
CREATE TABLE `aksesoris` (
    `id_aksesoris` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_aksesoris` VARCHAR(191) NOT NULL,
    `deskripsi_aksesoris` VARCHAR(191) NOT NULL,
    `harga_aksesoris` VARCHAR(191) NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `aksesoris_nama_aksesoris_key`(`nama_aksesoris`),
    PRIMARY KEY (`id_aksesoris`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
