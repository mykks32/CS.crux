#!/bin/bash

BASE_DIR="./Problems"

# Step 1: Select Problem
files=()
while IFS= read -r -d '' f; do
  files+=("$f")
done < <(find "$BASE_DIR" -mindepth 1 -maxdepth 1 -name "*.ts" -print0 2>/dev/null | sort -z)

if [ ${#files[@]} -eq 0 ]; then
  echo "No problems found in $BASE_DIR"
  exit 1
fi

names=()
for f in "${files[@]}"; do
  names+=("$(basename "$f")")
done

echo "Select Problem:"
select name in "${names[@]}"; do
  if [ -n "$name" ]; then
    file_path="${files[$((REPLY-1))]}"
    break
  else
    echo "Invalid selection"
  fi
done

# Step 2: Compile TypeScript
if ! tsc "$file_path" --outDir "$BASE_DIR/dist" --ignoreConfig; then
  echo "TypeScript compilation failed"
  exit 1
fi

# Step 3: Run
file_name=$(basename "$file_path" .ts)
node "$BASE_DIR/dist/$file_name.js"