-- CreateTable
CREATE TABLE `jersey` (
    `id_jersey` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jersey` VARCHAR(191) NOT NULL,
    `uk_jersey` VARCHAR(191) NOT NULL,
    `deskripsi_jersey` VARCHAR(191) NOT NULL,
    `harga_jersey` INTEGER NOT NULL,
    `gambar_jersey` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_jersey`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
