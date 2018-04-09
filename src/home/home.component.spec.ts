import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent: Spec', () => {
    beforeEach(() => {
        console.log(TestBed, HomeComponent)
    })
    it('should be a canary test', () => {
        expect(true).toBeTruthy();
    });
});