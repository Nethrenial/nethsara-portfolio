---
tags:
  - Web Development
featured: true
publishedAt: 2025-06-09T00:00:00.000Z
author: Nethsara Elvitigala
---

# Deep Dive Into Typescript Generics page

## Stop Writing Brittle TypeScript. Master Generics.

You’ve been there. You write a function that works perfectly for a `string`. Then you need it for a `number`. So you copy-paste, change the type annotation, and suddenly you have two functions doing the exact same thing. It feels dirty. Inefficient. Brittle.

What if I told you there’s a way to write one function that can handle multiple types with grace and full type safety? A way to build components that are not only reusable but also flexible and robust?

This isn’t some dark magic. It’s TypeScript Generics. And by the end of this article, you’ll not only understand them, you’ll be ready to wield them to write cleaner, more scalable, and more maintainable code.

### The Problem: The Tyranny of the Specific

Let's start with a common scenario: you want to create a simple utility function that takes an array of items and returns the first item. Without generics, you might write something like this:

TypeScript

```ts
function getFirstString(items: string[]): string {
  return items[0];
}

function getFirstNumber(items: number[]): number {
  return items[0];
}
```

This works, but it’s a classic case of code duplication. What happens when you need to get the first element of an array of objects? Or an array of booleans? You could create a new function for each type, but that’s a maintenance nightmare waiting to happen.

You might be tempted to use the `any` type to make your function more "generic":

TypeScript

```ts
function getFirstAny(items: any[]): any {
  return items[0];
}
```

While this "works," you've just thrown away all the benefits of TypeScript. You've lost type safety. The compiler has no idea what type `getFirstAny` will return, so you lose autocompletion and compile-time error checking. This is a breeding ground for bugs.

This is where Generics come in. They are the elegant solution to this problem.

### The Solution: Enter the `<T>`

Generics allow us to write functions and classes that can work with a variety of types without sacrificing type safety. Think of them as placeholders for types that are determined at the time of use.

Let's rewrite our `getFirst` function using generics:

TypeScript

```ts
function getFirst<T>(items: T[]): T {
  return items[0];
}
```

Let's break down this syntax:

- `<T>`: This is where we declare a generic type parameter. `T` is a conventional name, but you could use any valid identifier. This `T` acts as a placeholder for a specific type.
- `items: T[]`: We're saying that the `items` parameter is an array of type `T`.
- `: T`: This indicates that the function will return a value of type `T`.

Now, when we use this function, TypeScript's type inference will figure out what `T` is based on the arguments we pass:

TypeScript

```ts
const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers); // TypeScript infers T as number

const strings = ["hello", "world"];
const firstString = getFirst(strings); // TypeScript infers T as string
```

Look at that! One function, multiple types, and full type safety. If you hover over `firstNumber`, your editor will tell you it's a `number`. Hover over `firstString`, and you'll see it's a `string`. This is the power of generics.

### Beyond the Basics: Real-World Scenarios

The `getFirst` example is the "hello world" of generics. But their true power shines in more complex, real-world scenarios.

#### 1. Building a Flexible API Fetching Function

When you're fetching data from an API, the response structure can vary wildly. Instead of writing a separate fetching function for each endpoint, you can create a single, generic function:

Code snippet

```ts
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser(userId: number) {
  const user = await fetchData<User>(`/api/users/${userId}`);
  console.log(user.name); 
}
```

In this example, our `fetchData` function is generic over the expected response type `T`. When we call it in `getUser`, we explicitly tell it to expect a `User` object. This gives us full type safety and autocompletion on the `user` object. No more guessing what properties the API response will have.

#### 2. Crafting Powerful Utility Functions

Generics are the backbone of many powerful utility libraries like Lodash. Let's create our own `pluck` function, which extracts a property from an array of objects:

TypeScript

```ts
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}

const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
];

const names = pluck(users, 'name'); // type is string[]
const ages = pluck(users, 'age');  // type is number[]

// This will cause a compile-time error!
const invalid = pluck(users, 'nonExistentProperty'); 
```

Here, we're using two generic types:

- `T`: Represents the type of the objects in the array.
- `K extends keyof T`: This is a **generic constraint**. It says that `K` must be a key of `T`. This is incredibly powerful because it prevents us from trying to access a property that doesn't exist on the objects.

#### 3. Creating Reusable Components in Frontend Frameworks

If you're using a framework like React, generics are invaluable for creating reusable and type-safe components. Consider a generic `Table` component:

TypeScript

```ts
interface TableProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function Table<T>({ items, renderItem }: TableProps<T>) {
  return (
    <table>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>{renderItem(item)}</tr>
        ))}
      </tbody>
    </table>
  );
}

// Example usage with an array of users
const users: User[] = [/* ... */];

<Table
  items={users}
  renderItem={(user) => (
    <>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </>
  )}
/>
```

This `Table` component can render any type of data, as long as you provide the `items` and a `renderItem` function that knows how to render a single item. This is component-driven development at its finest: flexible, reusable, and type-safe.

### It's Time to Level Up Your TypeScript

We've only scratched the surface of what's possible with TypeScript generics. From conditional types to mapped types, there's a whole world of advanced patterns to explore. But the core concept is simple: **writing code that works with types, not against them.**

Stop writing brittle, duplicated code. Start embracing the power and flexibility of generics. Your future self (and your teammates) will thank you.

**Ready to take the next step in your TypeScript journey?**

If you're looking to build robust, scalable, and maintainable applications, understanding advanced TypeScript concepts like generics is non-negotiable.

**Feeling inspired? I'm currently available for new opportunities.** Let's connect and discuss how I can bring my expertise in modern TypeScript and software architecture to your team.

**Check out my portfolio** | **Connect with me on LinkedIn** | **Send me an email**
