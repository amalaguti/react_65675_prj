#!/bin/bash
# Create project initial scaffolding


echo "Creating project initial scaffolding... on current path: $PWD"
mkdir -p ./src/components 
mkdir -p ./src/components/{common,layout,pages}
mkdir -p ./src/components/layout/{navbar,footer}

tree  ./src/