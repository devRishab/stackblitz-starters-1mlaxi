# stackblitz-starters-1mlaxi

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/devRishab/stackblitz-starters-1mlaxi)

Practical Uses of Subjects

Multicasting: Distributing a single source of data to multiple observers, useful in scenarios where you want multiple parts of an application to react to the same events.

Event Handling: Acting as an event bus, where different parts of an application can emit and listen for events.

Unicast Observable: Each subscriber to an Observable creates a new independent execution.

Multicast Observable: Multiple subscribers share the same execution, receiving the same emitted values.

Each subscription to the unicast Observable will trigger its own independent execution of the underlying producer logic.
This means that each subscriber will receive potentially different values if the underlying producer generates different values for each execution.
