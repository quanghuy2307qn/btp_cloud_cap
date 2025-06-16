using { ZTEST_PI_SD_SRV as service } from './external/ZTEST_PI_SD_SRV.csn';

service ServiceSD {
  entity SHEADER as projection on service.SHEADERSet;
}