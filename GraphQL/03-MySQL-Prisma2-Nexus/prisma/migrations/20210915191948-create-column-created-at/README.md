# Migration `20210915191948-create-column-created-at`

This migration has been generated by Lucas Andrade at 9/15/2021, 1:19:48 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `reviews` ADD COLUMN     `createdAt` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210915174929-create-review..20210915191948-create-column-created-at
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 model Post {
   id        Int      @id @default(autoincrement())
@@ -30,13 +30,14 @@
   @@map(name: "users")
 }
 model Review {
-  id         Int  @id @default(autoincrement())
+  id         Int       @id @default(autoincrement())
   postId     Int
-  post       Post @relation(fields: [postId], references: [id])
+  post       Post      @relation(fields: [postId], references: [id])
   reviewerId Int
-  reviewer   User @relation(fields: [reviewerId], references: [id])
+  reviewer   User      @relation(fields: [reviewerId], references: [id])
   nota       Int
+  createdAt  DateTime? @default(now())
   @@map(name: "reviews")
 }
```

