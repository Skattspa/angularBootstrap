import { PruebaModuleModule } from './prueba-module.module';

describe('PruebaModuleModule', () => {
  let pruebaModuleModule: PruebaModuleModule;

  beforeEach(() => {
    pruebaModuleModule = new PruebaModuleModule();
  });

  it('should create an instance', () => {
    expect(pruebaModuleModule).toBeTruthy();
  });
});
