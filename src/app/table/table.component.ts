import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

export interface PeriodicElement {
  itemName: string;
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
    itemName: 'GOLD 60LT Drum',
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
  tableForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.tableForm = this.fb.group({
      itemName: [{value: '', disabled: true}],
      region: [{value: '', disabled: true}],
      customerName: [{value: '', disabled: true}],
      ecSalesPrice: [{value: '', disabled: true}],
      hqHtdCost: [{value: '', disabled: true}],
      transferPrice: [{value: '', disabled: true}],
      localizationCost: [{value: '', disabled: true}],
      localCost: [{value: '', disabled: true}],
      gm: [{value: '', disabled: true}],
      januaryData: this.fb.group({
        quantity: [''],
        usd: ['']
      }),
      februaryData: this.fb.group({
        quantity: [''],
        usd: ['']
      })
    });
  }

}
