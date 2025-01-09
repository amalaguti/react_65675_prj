#!/bin/bash
# Create project initial scaffolding


echo "Creating project initial scaffolding... on current path: $PWD"
mkdir -p ./src/components; touch ./src/components/.gitkeep
mkdir -p ./src/components/common; touch ./src/components/common/.gitkeep
mkdir -p ./src/components/layout; touch ./src/components/layout/.gitkeep
mkdir -p ./src/components/pages; touch ./src/components/pages/.gitkeep
mkdir -p ./src/components/layout/navbar; touch ./src/components/layout/navbar/.gitkeep
mkdir -p ./src/components/layout/footer; touch ./src/components/layout/footer/.gitkeep

tree  ./src/