    // Toggle this if you want to show only the Action Required column
const SHOW_ONLY_ACTION = false;

// ========= Paste your TSV here (keep the header line) =========
const RAW_TSV = `
CRA Category\tShortfall Value (£)\tTime Since Evidence (months)\tSOF for Shortfall\tAction Required
LOW\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
LOW\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
LOW\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
LOW\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t<£5k\tLess than 1 month\tOther\tNO action required
LOW\t<£5k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\tLess than 1 month\tOther\tLast one month bank statement
LOW\t<£5k\tLess than 1 month\tOther\tLast three month bank statement
LOW\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t<£5k\t1-2 months\tSalary savings or share/stock sale\tNO action required
LOW\t<£5k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t<£5k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t<£5k\t1-2 months\tOther\tNO action required
LOW\t<£5k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\t1-2 months\tOther\tLast one month bank statement
LOW\t<£5k\t1-2 months\tOther\tLast three month bank statement
LOW\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t<£5k\t3-6 months\tSalary savings or share/stock sale\tNO action required
LOW\t<£5k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t<£5k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t<£5k\t3-6 months\tOther\tNO action required
LOW\t<£5k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\t3-6 months\tOther\tLast one month bank statement
LOW\t<£5k\t3-6 months\tOther\tLast three month bank statement
LOW\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
LOW\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t<£5k\tOver 6 months\tOther\tNO action required
LOW\t<£5k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t<£5k\tOver 6 months\tOther\tLast one month bank statement
LOW\t<£5k\tOver 6 months\tOther\tLast three month bank statement
LOW\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
LOW\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£5k -> £10k\tLess than 1 month\tOther\tNO action required
LOW\t£5k -> £10k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\tLess than 1 month\tOther\tLast one month bank statement
LOW\t£5k -> £10k\tLess than 1 month\tOther\tLast three month bank statement
LOW\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tNO action required
LOW\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£5k -> £10k\t1-2 months\tOther\tNO action required
LOW\t£5k -> £10k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\t1-2 months\tOther\tLast one month bank statement
LOW\t£5k -> £10k\t1-2 months\tOther\tLast three month bank statement
LOW\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tNO action required
LOW\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£5k -> £10k\t3-6 months\tOther\tNO action required
LOW\t£5k -> £10k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\t3-6 months\tOther\tLast one month bank statement
LOW\t£5k -> £10k\t3-6 months\tOther\tLast three month bank statement
LOW\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
LOW\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£5k -> £10k\tOver 6 months\tOther\tNO action required
LOW\t£5k -> £10k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£5k -> £10k\tOver 6 months\tOther\tLast one month bank statement
LOW\t£5k -> £10k\tOver 6 months\tOther\tLast three month bank statement
LOW\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
LOW\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£10k -> £50k\tLess than 1 month\tOther\tNO action required
LOW\t£10k -> £50k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\tLess than 1 month\tOther\tLast one month bank statement
LOW\t£10k -> £50k\tLess than 1 month\tOther\tLast three month bank statement
LOW\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tNO action required
LOW\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£10k -> £50k\t1-2 months\tOther\tNO action required
LOW\t£10k -> £50k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\t1-2 months\tOther\tLast one month bank statement
LOW\t£10k -> £50k\t1-2 months\tOther\tLast three month bank statement
LOW\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tNO action required
LOW\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£10k -> £50k\t3-6 months\tOther\tNO action required
LOW\t£10k -> £50k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\t3-6 months\tOther\tLast one month bank statement
LOW\t£10k -> £50k\t3-6 months\tOther\tLast three month bank statement
LOW\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
LOW\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£10k -> £50k\tOver 6 months\tOther\tNO action required
LOW\t£10k -> £50k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£10k -> £50k\tOver 6 months\tOther\tLast one month bank statement
LOW\t£10k -> £50k\tOver 6 months\tOther\tLast three month bank statement
LOW\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
LOW\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£50k +\tLess than 1 month\tOther\tNO action required
LOW\t£50k +\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\tLess than 1 month\tOther\tLast one month bank statement
LOW\t£50k +\tLess than 1 month\tOther\tLast three month bank statement
LOW\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£50k +\t1-2 months\tSalary savings or share/stock sale\tNO action required
LOW\t£50k +\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£50k +\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£50k +\t1-2 months\tOther\tNO action required
LOW\t£50k +\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\t1-2 months\tOther\tLast one month bank statement
LOW\t£50k +\t1-2 months\tOther\tLast three month bank statement
LOW\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£50k +\t3-6 months\tSalary savings or share/stock sale\tNO action required
LOW\t£50k +\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£50k +\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£50k +\t3-6 months\tOther\tNO action required
LOW\t£50k +\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\t3-6 months\tOther\tLast one month bank statement
LOW\t£50k +\t3-6 months\tOther\tLast three month bank statement
LOW\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
LOW\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
LOW\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
LOW\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
LOW\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
LOW\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
LOW\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tNO action required
LOW\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
LOW\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
LOW\t£50k +\tOver 6 months\tOther\tNO action required
LOW\t£50k +\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
LOW\t£50k +\tOver 6 months\tOther\tLast one month bank statement
LOW\t£50k +\tOver 6 months\tOther\tLast three month bank statement
MEDIUM\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
MEDIUM\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t<£5k\tLess than 1 month\tOther\tNO action required
MEDIUM\t<£5k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\tLess than 1 month\tOther\tLast one month bank statement
MEDIUM\t<£5k\tLess than 1 month\tOther\tLast three month bank statement
MEDIUM\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t<£5k\t1-2 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t<£5k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t<£5k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t<£5k\t1-2 months\tOther\tNO action required
MEDIUM\t<£5k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\t1-2 months\tOther\tLast one month bank statement
MEDIUM\t<£5k\t1-2 months\tOther\tLast three month bank statement
MEDIUM\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t<£5k\t3-6 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t<£5k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t<£5k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t<£5k\t3-6 months\tOther\tNO action required
MEDIUM\t<£5k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\t3-6 months\tOther\tLast one month bank statement
MEDIUM\t<£5k\t3-6 months\tOther\tLast three month bank statement
MEDIUM\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t<£5k\tOver 6 months\tOther\tNO action required
MEDIUM\t<£5k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t<£5k\tOver 6 months\tOther\tLast one month bank statement
MEDIUM\t<£5k\tOver 6 months\tOther\tLast three month bank statement
MEDIUM\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£5k -> £10k\tLess than 1 month\tOther\tNO action required
MEDIUM\t£5k -> £10k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\tLess than 1 month\tOther\tLast one month bank statement
MEDIUM\t£5k -> £10k\tLess than 1 month\tOther\tLast three month bank statement
MEDIUM\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£5k -> £10k\t1-2 months\tOther\tNO action required
MEDIUM\t£5k -> £10k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\t1-2 months\tOther\tLast one month bank statement
MEDIUM\t£5k -> £10k\t1-2 months\tOther\tLast three month bank statement
MEDIUM\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£5k -> £10k\t3-6 months\tOther\tNO action required
MEDIUM\t£5k -> £10k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\t3-6 months\tOther\tLast one month bank statement
MEDIUM\t£5k -> £10k\t3-6 months\tOther\tLast three month bank statement
MEDIUM\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£5k -> £10k\tOver 6 months\tOther\tNO action required
MEDIUM\t£5k -> £10k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£5k -> £10k\tOver 6 months\tOther\tLast one month bank statement
MEDIUM\t£5k -> £10k\tOver 6 months\tOther\tLast three month bank statement
MEDIUM\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£10k -> £50k\tLess than 1 month\tOther\tNO action required
MEDIUM\t£10k -> £50k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\tLess than 1 month\tOther\tLast one month bank statement
MEDIUM\t£10k -> £50k\tLess than 1 month\tOther\tLast three month bank statement
MEDIUM\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£10k -> £50k\t1-2 months\tOther\tNO action required
MEDIUM\t£10k -> £50k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\t1-2 months\tOther\tLast one month bank statement
MEDIUM\t£10k -> £50k\t1-2 months\tOther\tLast three month bank statement
MEDIUM\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£10k -> £50k\t3-6 months\tOther\tNO action required
MEDIUM\t£10k -> £50k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\t3-6 months\tOther\tLast one month bank statement
MEDIUM\t£10k -> £50k\t3-6 months\tOther\tLast three month bank statement
MEDIUM\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£10k -> £50k\tOver 6 months\tOther\tNO action required
MEDIUM\t£10k -> £50k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£10k -> £50k\tOver 6 months\tOther\tLast one month bank statement
MEDIUM\t£10k -> £50k\tOver 6 months\tOther\tLast three month bank statement
MEDIUM\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£50k +\tLess than 1 month\tOther\tNO action required
MEDIUM\t£50k +\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\tLess than 1 month\tOther\tLast one month bank statement
MEDIUM\t£50k +\tLess than 1 month\tOther\tLast three month bank statement
MEDIUM\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£50k +\t1-2 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£50k +\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£50k +\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£50k +\t1-2 months\tOther\tNO action required
MEDIUM\t£50k +\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\t1-2 months\tOther\tLast one month bank statement
MEDIUM\t£50k +\t1-2 months\tOther\tLast three month bank statement
MEDIUM\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£50k +\t3-6 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£50k +\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£50k +\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£50k +\t3-6 months\tOther\tNO action required
MEDIUM\t£50k +\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\t3-6 months\tOther\tLast one month bank statement
MEDIUM\t£50k +\t3-6 months\tOther\tLast three month bank statement
MEDIUM\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
MEDIUM\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
MEDIUM\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
MEDIUM\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
MEDIUM\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
MEDIUM\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
MEDIUM\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tNO action required
MEDIUM\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
MEDIUM\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
MEDIUM\t£50k +\tOver 6 months\tOther\tNO action required
MEDIUM\t£50k +\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
MEDIUM\t£50k +\tOver 6 months\tOther\tLast one month bank statement
MEDIUM\t£50k +\tOver 6 months\tOther\tLast three month bank statement
HIGH\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t<£5k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t<£5k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
HIGH\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t<£5k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t<£5k\tLess than 1 month\tOther\tNO action required
HIGH\t<£5k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\tLess than 1 month\tOther\tLast one month bank statement
HIGH\t<£5k\tLess than 1 month\tOther\tLast three month bank statement
HIGH\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t<£5k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t<£5k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t<£5k\t1-2 months\tSalary savings or share/stock sale\tNO action required
HIGH\t<£5k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t<£5k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t<£5k\t1-2 months\tOther\tNO action required
HIGH\t<£5k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\t1-2 months\tOther\tLast one month bank statement
HIGH\t<£5k\t1-2 months\tOther\tLast three month bank statement
HIGH\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t<£5k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t<£5k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t<£5k\t3-6 months\tSalary savings or share/stock sale\tNO action required
HIGH\t<£5k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t<£5k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t<£5k\t3-6 months\tOther\tNO action required
HIGH\t<£5k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\t3-6 months\tOther\tLast one month bank statement
HIGH\t<£5k\t3-6 months\tOther\tLast three month bank statement
HIGH\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t<£5k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t<£5k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
HIGH\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t<£5k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t<£5k\tOver 6 months\tOther\tNO action required
HIGH\t<£5k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t<£5k\tOver 6 months\tOther\tLast one month bank statement
HIGH\t<£5k\tOver 6 months\tOther\tLast three month bank statement
HIGH\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£5k -> £10k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£5k -> £10k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
HIGH\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£5k -> £10k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£5k -> £10k\tLess than 1 month\tOther\tNO action required
HIGH\t£5k -> £10k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\tLess than 1 month\tOther\tLast one month bank statement
HIGH\t£5k -> £10k\tLess than 1 month\tOther\tLast three month bank statement
HIGH\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£5k -> £10k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£5k -> £10k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£5k -> £10k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£5k -> £10k\t1-2 months\tOther\tNO action required
HIGH\t£5k -> £10k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\t1-2 months\tOther\tLast one month bank statement
HIGH\t£5k -> £10k\t1-2 months\tOther\tLast three month bank statement
HIGH\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£5k -> £10k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£5k -> £10k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£5k -> £10k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£5k -> £10k\t3-6 months\tOther\tNO action required
HIGH\t£5k -> £10k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\t3-6 months\tOther\tLast one month bank statement
HIGH\t£5k -> £10k\t3-6 months\tOther\tLast three month bank statement
HIGH\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£5k -> £10k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£5k -> £10k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£5k -> £10k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£5k -> £10k\tOver 6 months\tOther\tNO action required
HIGH\t£5k -> £10k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£5k -> £10k\tOver 6 months\tOther\tLast one month bank statement
HIGH\t£5k -> £10k\tOver 6 months\tOther\tLast three month bank statement
HIGH\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£10k -> £50k\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£10k -> £50k\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
HIGH\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£10k -> £50k\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£10k -> £50k\tLess than 1 month\tOther\tNO action required
HIGH\t£10k -> £50k\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\tLess than 1 month\tOther\tLast one month bank statement
HIGH\t£10k -> £50k\tLess than 1 month\tOther\tLast three month bank statement
HIGH\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£10k -> £50k\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£10k -> £50k\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£10k -> £50k\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£10k -> £50k\t1-2 months\tOther\tNO action required
HIGH\t£10k -> £50k\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\t1-2 months\tOther\tLast one month bank statement
HIGH\t£10k -> £50k\t1-2 months\tOther\tLast three month bank statement
HIGH\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£10k -> £50k\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£10k -> £50k\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£10k -> £50k\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£10k -> £50k\t3-6 months\tOther\tNO action required
HIGH\t£10k -> £50k\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\t3-6 months\tOther\tLast one month bank statement
HIGH\t£10k -> £50k\t3-6 months\tOther\tLast three month bank statement
HIGH\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£10k -> £50k\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£10k -> £50k\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£10k -> £50k\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£10k -> £50k\tOver 6 months\tOther\tNO action required
HIGH\t£10k -> £50k\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£10k -> £50k\tOver 6 months\tOther\tLast one month bank statement
HIGH\t£10k -> £50k\tOver 6 months\tOther\tLast three month bank statement
HIGH\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£50k +\tLess than 1 month\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£50k +\tLess than 1 month\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tNO action required
HIGH\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£50k +\tLess than 1 month\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£50k +\tLess than 1 month\tOther\tNO action required
HIGH\t£50k +\tLess than 1 month\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\tLess than 1 month\tOther\tLast one month bank statement
HIGH\t£50k +\tLess than 1 month\tOther\tLast three month bank statement
HIGH\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£50k +\t1-2 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£50k +\t1-2 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£50k +\t1-2 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£50k +\t1-2 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\t1-2 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£50k +\t1-2 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£50k +\t1-2 months\tOther\tNO action required
HIGH\t£50k +\t1-2 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\t1-2 months\tOther\tLast one month bank statement
HIGH\t£50k +\t1-2 months\tOther\tLast three month bank statement
HIGH\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£50k +\t3-6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£50k +\t3-6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£50k +\t3-6 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£50k +\t3-6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\t3-6 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£50k +\t3-6 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£50k +\t3-6 months\tOther\tNO action required
HIGH\t£50k +\t3-6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\t3-6 months\tOther\tLast one month bank statement
HIGH\t£50k +\t3-6 months\tOther\tLast three month bank statement
HIGH\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tNO action required
HIGH\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tLast one month bank statement
HIGH\t£50k +\tOver 6 months\tInheritance divorce settlement or sale of property\tLast three month bank statement
HIGH\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tNO action required
HIGH\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tLast one month bank statement
HIGH\t£50k +\tOver 6 months\tSavings in investment savings account or savings in current account\tLast three month bank statement
HIGH\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tNO action required
HIGH\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tLast one month bank statement
HIGH\t£50k +\tOver 6 months\tSalary savings or share/stock sale\tLast three month bank statement
HIGH\t£50k +\tOver 6 months\tOther\tNO action required
HIGH\t£50k +\tOver 6 months\tOther\tWritten confirmation from borrower that SOF hasn't changed
HIGH\t£50k +\tOver 6 months\tOther\tLast one month bank statement
HIGH\t£50k +\tOver 6 months\tOther\tLast three month bank statement
<!-- PASTE THE REST OF YOUR ROWS HERE ... keep the exact tab and newline structure -->
`.trim();


// ===== TSV parser: header -> keys, rows -> objects =====
function parseTSV(tsv) {
  const lines = tsv.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = lines[0].split('\t').map(h => h.trim());
  return lines.slice(1).map(line => {
    const cells = line.split('\t');
    const obj = {};
    headers.forEach((h, i) => obj[h] = (cells[i] ?? '').trim());
    return obj;
  });
}

const ACTIONLOGIC = parseTSV(RAW_TSV);

// ---------- Utilities ----------
const byId = id => document.getElementById(id);
const safe = v => (v ?? "").toString().trim();

function matches(row, field, val) {
  if (!val) return true; // allow "Any"
  return safe(row[field]) === safe(val);
}

// ---------- Filtering ----------
function applyFilter() {
  const cat = byId("craCategory").value;
  const shortfall = byId("shortfall").value;
  const timeSince = byId("timeSince").value;
  const sof = byId("sof").value;

  const filtered = ACTIONLOGIC.filter(r =>
    matches(r, "CRA Category", cat) &&
    matches(r, "Shortfall Value (£)", shortfall) &&
    matches(r, "Time Since Evidence (months)", timeSince) &&
    matches(r, "SOF for Shortfall", sof)
  );

  renderResults(filtered);
}

function clearFilters() {
  byId("craCategory").value = "";
  byId("shortfall").value = "";
  byId("timeSince").value = "";
  byId("sof").value = "";
  renderResults(ACTIONLOGIC);
}

// ---------- Rendering ----------
function renderResults(rows) {
  const el = byId("results");
  const count = byId("rowcount");
  count.textContent = `${rows.length} row${rows.length === 1 ? "" : "s"} matched`;

  if (!rows || rows.length === 0) {
    el.innerHTML = `<p class="muted">No matching actions found.</p>`;
    return;
  }

  if (SHOW_ONLY_ACTION) {
    let html = `<table><thead><tr><th>#</th><th>Action Required</th></tr></thead><tbody>`;
    rows.forEach((r, idx) => {
      html += `<tr><td>${idx + 1}</td><td>${safe(r["Action Required"])}</td></tr>`;
    });
    html += `</tbody></table>`;
    el.innerHTML = html;
    return;
  }

  // Render all columns present
  const allKeys = Array.from(
    rows.reduce((set, r) => {
      Object.keys(r).forEach(k => set.add(k));
      return set;
    }, new Set())
  );

  const header = `<tr>${allKeys.map(k => `<th>${k}</th>`).join("")}</tr>`;
  const body = rows.map(r =>
    `<tr>${allKeys.map(k => `<td>${r[k] ?? ""}</td>`).join("")}</tr>`
  ).join("");

  el.innerHTML = `<table><thead>${header}</thead><tbody>${body}</tbody></table>`;
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  byId("btnFilter").addEventListener("click", applyFilter);
  byId("btnClear").addEventListener("click", clearFilters);
  renderResults(ACTIONLOGIC); // Initial render (all rows)
});
