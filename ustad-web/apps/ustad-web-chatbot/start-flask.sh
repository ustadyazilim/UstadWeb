#!/bin/bash

# Source the environment file if it exists
if [ -f "./env" ]; then
    source ./env
fi

# Activate virtual environment if it exists
if [ -d "./venv" ]; then
    source ./venv/bin/activate
fi

# Install Flask if not already installed
pip install flask --quiet

# Run the Flask application
python3 ./supportflask.py
