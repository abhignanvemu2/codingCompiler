import { CodeTemplate } from '../types';

const codeTemplates: CodeTemplate = {
  javascript: `// JavaScript Playground
console.log("Hello, World!");

// Try defining a function
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("JavaScript"));

// Or try using some ES6 features
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`,

  typescript: `// TypeScript Playground
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("TypeScript"));

// Try using some TypeScript features
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Alice",
  age: 30
};

console.log(person);`,

  python: `# Python Playground
print("Hello, World!")

# Try defining a function
def greet(name):
    return f"Hello, {name}!"

print(greet("Python"))

# Or try using some Python features
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print(doubled)`,

  java: `// Java Playground
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Try calling a method
        System.out.println(greet("Java"));
    }
    
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}`,

  c: `// C Playground
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    
    // Try using some C features
    int numbers[] = {1, 2, 3, 4, 5};
    int length = sizeof(numbers) / sizeof(numbers[0]);
    
    printf("Numbers: ");
    for (int i = 0; i < length; i++) {
        printf("%d ", numbers[i]);
    }
    
    return 0;
}`,

  cpp: `// C++ Playground
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::cout << "Hello, World!" << std::endl;
    
    // Try using some C++ features
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    std::cout << "Numbers: ";
    for (int n : numbers) {
        std::cout << n << " ";
    }
    
    return 0;
}`,

  csharp: `// C# Playground
using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
        
        // Try using some C# features
        var numbers = new List<int> {1, 2, 3, 4, 5};
        var doubled = numbers.Select(n => n * 2).ToList();
        
        Console.WriteLine(string.Join(", ", doubled));
    }
}`,

  php: `<?php
// PHP Playground
echo "Hello, World!\\n";

// Try defining a function
function greet($name) {
    return "Hello, $name!";
}

echo greet("PHP") . "\\n";

// Or try using some PHP features
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(function($n) { return $n * 2; }, $numbers);
print_r($doubled);
?>`,

  ruby: `# Ruby Playground
puts "Hello, World!"

# Try defining a function
def greet(name)
  "Hello, #{name}!"
end

puts greet("Ruby")

# Or try using some Ruby features
numbers = [1, 2, 3, 4, 5]
doubled = numbers.map { |n| n * 2 }
puts doubled.inspect`,

  go: `// Go Playground
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    
    // Try calling a function
    fmt.Println(greet("Go"))
    
    // Or try using some Go features
    numbers := []int{1, 2, 3, 4, 5}
    doubled := make([]int, len(numbers))
    
    for i, n := range numbers {
        doubled[i] = n * 2
    }
    
    fmt.Println(doubled)
}

func greet(name string) string {
    return "Hello, " + name + "!"
}`,

  rust: `// Rust Playground
fn main() {
    println!("Hello, World!");
    
    // Try calling a function
    println!("{}", greet("Rust"));
    
    // Or try using some Rust features
    let numbers = vec![1, 2, 3, 4, 5];
    let doubled: Vec<i32> = numbers.iter().map(|&n| n * 2).collect();
    
    println!("{:?}", doubled);
}

fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}`
};

export const getDefaultCode = (language: string): string => {
  return codeTemplates[language] || codeTemplates.javascript;
};