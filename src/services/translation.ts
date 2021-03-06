import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslationService } from './translation.service';
import { InjectorRef } from '../models/injector-ref';

/**
 * Provides 'lang' to the translate pipe.
 */
@Injectable() export class Translation {

    public lang: string;

    protected translation: TranslationService;

    protected paramSubscriptions: Subscription[] = [];

    constructor(
        protected changeDetectorRef?: ChangeDetectorRef
    ) {
        this.translation = InjectorRef.get(TranslationService);
        // When the language changes, subscribes to the event & updates lang property.
        this.paramSubscriptions.push(this.translation.translationChanged().subscribe(
            (language: string) => {
                this.lang = language;
                // OnPush Change Detection strategy.
                if (this.changeDetectorRef) { this.changeDetectorRef.markForCheck(); }
            }
        ));
    }

    protected cancelParamSubscriptions(): void {
        this.paramSubscriptions.forEach((subscription: Subscription) => {
            if (typeof subscription !== "undefined") {
                subscription.unsubscribe();
            }
        });
    }

}
