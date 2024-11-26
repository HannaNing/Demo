import { Page, Locator, expect } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

export default class AdminMenuPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly passWord: Locator;
    readonly loginBtn: Locator;
    readonly adminMenu: Locator;
    readonly addBtn: Locator;
    readonly userRole: Locator;
    readonly jobMenu: Locator;
    readonly jobTitles: Locator;
    readonly addJobTitleBtn: Locator;
    readonly jobTitleInput: Locator;
    readonly saveJobTitleBtn: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('//input[@placeholder="Username"]');
        this.passWord = page.locator('//input[@placeholder="Password"]');
        this.loginBtn = page.locator('//button[@type="submit"]');
        this.adminMenu = page.locator('//span[text()="Admin"]');
        this.addBtn = page.locator('//button[normalize-space()="Add"]');
        this.userRole = page.locator('//label[text()="User Role"]//ancestor::div[contains(@class,"oxd-grid-item--gutters")]//descendant::div[@class="oxd-select-wrapper"]')

        //Admin > Job
        this.jobMenu = page.locator('.oxd-topbar-body-nav-tab-item')
        this.jobTitles = page.locator('Job Titles')
        this.addJobTitleBtn = page.locator('//button[text()=" Add "]')
        this.jobTitleInput = page.locator('[class="oxd-input oxd-input--active"]')
        this.saveJobTitleBtn = page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
        

    }
    async visit() {
        await this.page.goto(`${process.env.WEB_URL}`);
    }
    async login() {
        await this.userName.fill("Admin");
        await this.passWord.fill("admin123");
        await this.loginBtn.click();
    }
    async createUser() {
        await this.adminMenu.click();
        await this.addBtn.click();
        await this.userRole.click();
    }
    async createJobTitle() {
        await this.jobMenu.click()
        await this.jobTitles.click()
        await this.addJobTitleBtn.click()
        await this.jobTitleInput.fill('Automation Test')
        await this.saveJobTitleBtn.click()
    }


}