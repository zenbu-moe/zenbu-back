// Uncomment these imports to begin using these cool features!

import { get } from "@loopback/rest";

// import {inject} from '@loopback/core';


export class TestingController {
  @get('/testing')
    hello(): string {
      return 'Testing?'
    }
}
