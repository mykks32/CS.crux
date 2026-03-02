### 1. Start MongoDB

```bash
mongod
```
Open another terminal:
```bash
mongosh
```


### 2. Create Database
```nosql
use nosql_practice
exit
```


### 3. Import Data (Inside Any Problem Folder)
```bash
cd "Problem Folder Name"

mongoimport \
  --db nosql_practice \
  --collection test \
  --file insert.json \
  --jsonArray
```

### 4. Run Solution
```nosql
mongosh

use nosql_practice

db.test.aggregate([
  // paste solution.json here
])
```

### 5. Clean (Optional)
```nosql
db.test.drop() 
```

