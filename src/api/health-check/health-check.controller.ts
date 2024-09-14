import { Controller, Get, Route } from 'tsoa';

@Route('health-check')
export class HealthCheckController extends Controller {
  @Get('')
  getHealthCheck() {
    return 'everything is fine';
  }
}
