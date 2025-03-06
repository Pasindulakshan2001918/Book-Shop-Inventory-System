CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" TEXT NOT NULL CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY,
    "ProductVersion" TEXT NOT NULL
);

BEGIN TRANSACTION;
CREATE TABLE "Admins" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK_Admins" PRIMARY KEY AUTOINCREMENT,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL
);

CREATE TABLE "Books" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK_Books" PRIMARY KEY AUTOINCREMENT,
    "BookName" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "Genre" TEXT NOT NULL,
    "StockQuantity" INTEGER NOT NULL
);

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20250305045400_InitialCreate', '9.0.2');

CREATE TABLE "Admins" (
    "Id" int NOT NULL CONSTRAINT "PK_Admins" PRIMARY KEY,
    "Username" nvarchar(50) NOT NULL,
    "PasswordHash" nvarchar(255) NOT NULL,
    "Email" nvarchar(100) NOT NULL,
    "CreatedAt" datetime2 NOT NULL DEFAULT (GETUTCDATE())
);

CREATE UNIQUE INDEX "IX_Admins_Username" ON "Admins" ("Username");

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20250305063341_AddAdminTable', '9.0.2');

COMMIT;

