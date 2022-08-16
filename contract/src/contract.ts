import { NearBindgen, NearContract, near, call, view } from 'near-sdk-js';

@NearBindgen
class MyContract extends NearContract {
  greeting: string;

  constructor({message="Hello"}:{message: string}) {
    super();
    this.greeting = message;
  }

  default(){ return new MyContract({message: "Hello"}) }

  @call
  set_greeting({ message }: { message: string }): void {
    near.log(`Saving greeting ${message}`);
    this.greeting = message;
  }

  @view
  get_greeting(): string {
    near.log(`The current greeting is ${this.greeting}`);
    return this.greeting;
  }
}
