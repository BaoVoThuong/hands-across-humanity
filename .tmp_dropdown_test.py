from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    page.goto('http://127.0.0.1:4321/events/', wait_until='networkidle')
    page.locator('[data-join-event]').first.click()
    page.locator('[data-select-trigger]').click()
    assert page.locator('[data-select-menu]').is_visible()
    page.locator('[data-select-option][data-value="business"]').click()
    assert page.locator('[data-select-value]').inner_text() == 'A business'
    assert page.locator('select[name="org_type"]').input_value() == 'business'
    page.screenshot(path='/tmp/events-dropdown.png')
    browser.close()
