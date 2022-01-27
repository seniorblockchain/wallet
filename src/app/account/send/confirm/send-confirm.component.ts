import { Component, OnDestroy, OnInit } from '@angular/core';
import { SendService } from '../../../services/send.service';

@Component({
    selector: 'app-account-send-confirm',
    templateUrl: './send-confirm.component.html'
})
export class AccountSendConfirmComponent implements OnInit, OnDestroy {
    constructor(public sendService: SendService) {

    }

    ngOnDestroy() {

    }

    async ngOnInit() {
    }
}