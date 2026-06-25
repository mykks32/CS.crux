#!/bin/bash

BASE_DIR='./Problems'
mkdir -p "$BASE_DIR"

# Step 1: Show existing problems and detect next index
echo "Existing problems:"
ls "$BASE_DIR"/*.ts 2>/dev/null || echo "  (none)"
echo ""

count=$(find "$BASE_DIR" -mindepth 1 -maxdepth 1 -name "*.ts" 2>/dev/null | wc -l | tr -d ' ')
next_index=$((count + 1))
printf -v padded_index "%02d" "$next_index"

# Step 2: Enter problem name
read -r -p "Problem name (e.g. flatmap): " problem_name

if [ -z "$problem_name" ]; then
  echo "Name cannot be empty"
  exit 1
fi

FILE_PATH="$BASE_DIR/[$padded_index] $problem_name.ts"

if [ -f "$FILE_PATH" ]; then
  echo "Problem already exists: $FILE_PATH"
  exit 1
fi

# Step 3: Derive class name
# "flat map" → "FlatMap", "flatmap" → "Flatmap"
class_name=$(echo "$problem_name" | sed 's/[^a-zA-Z0-9 ]//g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1))substr($i,2)}1' | tr -d ' ')

# Step 4: Create file
cat <<EOL > "$FILE_PATH"
class ${class_name} {
	constructor() {}

  /**
   * Problem: ${problem_name}
   * -------------------------------------
   * @Description
   * @example
   * @params
   * @returns
   * @timeComplexity
   * @spaceComplexity
   *
   */
}

/**
* Self-inducing Test Block
*/
(() => {
  // Create Instance
  const obj = new ${class_name}()

  // Test Block using Object
  console.log(obj);
})()
EOL

echo "Created: $FILE_PATH"