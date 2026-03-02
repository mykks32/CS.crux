### 1. Open SQL Client

Example (MySQL):

```bash
mysql -u root -p
```
Or (PostgreSQL):
```bash
psql -U postgres
```

### 2. Create Database
```bash
CREATE DATABASE sql_practice;
```

**Switch to database:**

***MySQL***
```bash
USE sql_practice;
```

***PostgreSQL***
```bash
\c sql_practice
```

### 3. Run Files (Inside Any Problem Folder)
```bash
cd "Problem Folder Name"
```

**Run in this order:**
```bash
source create.sql;
source insert.sql;
source solution.sql;
```

**For PostgreSQL use:**
```bash
\i create.sql
\i insert.sql
\i solution.sql
```

