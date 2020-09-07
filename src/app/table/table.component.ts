import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  itemsName: string;
  region: string;
  customerName: string;
  ecSalesPrice: number;
  hqHtdCost: number;
  transferPrice: number;
  localizationCost: number;
  localCost: number;
  gm: number;
  januaryData: IDataPerMonth;
  februaryData: IDataPerMonth;
}

interface IDataPerMonth {
  quantity: number;
  usd: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    itemsName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['itemName', 'region', 'customerName', 'ecSalesPrice', 'hqHtdCost', 'transferPrice', 'localizationCost', 'localCost', 'gm', 'jan20qty', 'jan20usd', 'feb20qty', 'feb20usd'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  ngOnInit() {
  }

}
