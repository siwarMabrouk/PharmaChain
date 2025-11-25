/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicationModule } from './medication/medication.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { StockModule } from './stock/stock.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { DeliveryModule } from './delivery/delivery.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'siwar',
      password: '123',
      database: 'pharmachain',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Désactivé pour ne pas modifier les tables existantes
    }),
    MedicationModule,
    PharmacyModule,
    StockModule,
    OrderModule,
    AuthModule,
    DeliveryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
