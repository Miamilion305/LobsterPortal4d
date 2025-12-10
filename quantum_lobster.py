#!/usr/bin/env python3
"""
Quantum Lobster Portal 4D Simulator

This script simulates two core concepts from quantum computing:
1. Superposition - A qubit exists in a combination of both 0 and 1 simultaneously
2. Measurement (Collapse) - Measuring the qubit forces it to commit to a single state

The simulation uses a lobster-themed example where:
- State 0: Lobster is at Location 0 (Dinner plate/Future saved spot)
- State 1: Lobster is at Location 1 (Ocean coordinates)
"""

import random


def main():
    """
    Main function to simulate quantum superposition and measurement.
    """
    # ⚛️ SUPERPOSITION STATE
    # A qubit exists in a state that is a combination of both 0 and 1 simultaneously.
    # The random.choice([0, 1]) models the uncertainty and equal probability (50/50 chance)
    # of the qubit being a 0 or a 1.
    superposition_state = random.choice([0, 1])
    
    # 🧲 MEASUREMENT AND COLLAPSE
    # The act of measurement collapses the superposition.
    # The qubit stops being a mix of 0 and 1 and becomes a single, definite outcome.
    final_state = superposition_state


if __name__ == "__main__":
    main()
