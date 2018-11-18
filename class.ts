import './aspect';
import { Wove } from 'aspect.js';

@Wove()
class Demo {
  get(foo: any, bar: any): string {
    return 'Demo';
  }
}

const d = new Demo();
d.get(1, 2);
