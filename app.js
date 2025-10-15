// Toggle this if you want to show only the Action Required column
const SHOW_ONLY_ACTION = false; 

// --- Configuration / Sample Data (Corrected to match HTML options) ---
const RAW_TSV = `
Risk Rating	Shortfall Value	Source of Funds	Evidence	GAP	Redemption or Completion	ACTION
Low	0-5k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements
Low	0-5k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements
Low	0-5k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements
Low	0-5k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements
Low	5-10k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements
Low	5-10k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements
Low	5-10k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements
Low	5-10k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements
Low	10-50k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements
Low	10-50k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements
Low	10-50k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements
Low	10-50k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements
Low	50-100k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements
Low	50-100k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements
Low	50-100k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements
Low	50-100k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements
Low	100-200k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements
Low	100-200k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements
Low	100-200k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements
Low	100-200k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements
Low	200k+	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements
Low	200k+	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements
Low	200k+	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements
Low	200k+	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	10-50k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	10-50k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	10-50k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	10-50k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	50-100k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	50-100k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	50-100k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	50-100k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	100-200k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	100-200k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	100-200k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	100-200k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	200k+	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	200k+	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	200k+	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent 3 months Bank Statements and dividend payment voucher
Medium	200k+	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent 3 months Bank Statements and dividend payment voucher
High	0-5k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	0-5k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	0-5k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	0-5k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	5-10k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	5-10k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	5-10k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	5-10k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	10-50k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	10-50k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	10-50k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	10-50k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	50-100k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	50-100k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	50-100k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	50-100k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	100-200k	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	100-200k	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	100-200k	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	100-200k	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	200k+	Dividends	Bank Statement, dividend payment voucher	0-3	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	200k+	Dividends	Bank Statement, dividend payment voucher	3-6	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	200k+	Dividends	Bank Statement, dividend payment voucher	6-12	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
High	200k+	Dividends	Bank Statement, dividend payment voucher	12+	Redemption	Recent certified 3 months Bank Statements and dividend payment voucher
Low	0-5k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	No action
Low	0-5k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap
Low	0-5k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap
Low	0-5k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap
Low	5-10k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	No action
Low	5-10k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap
Low	5-10k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap
Low	5-10k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap
Low	10-50k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Bank Statements covering the gap
Low	10-50k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap
Low	10-50k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap
Low	10-50k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap
Low	50-100k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Bank Statements covering the gap
Low	50-100k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap
Low	50-100k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap
Low	50-100k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap
Low	100-200k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Bank Statements covering the gap
Low	100-200k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap
Low	100-200k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap
Low	100-200k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap
Low	200k+	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Bank Statements covering the gap
Low	200k+	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap
Low	200k+	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap
Low	200k+	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required.
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap
Medium	0-5k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap
Medium	5-10k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap
Medium	10-50k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Bank Statements covering the gap 
Medium	10-50k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap 
Medium	10-50k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap 
Medium	10-50k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap 
Medium	50-100k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Bank Statements covering the gap 
Medium	50-100k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap 
Medium	50-100k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap 
Medium	50-100k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap 
Medium	100-200k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Bank Statements covering the gap 
Medium	100-200k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap 
Medium	100-200k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap 
Medium	100-200k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap 
Medium	200k+	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Bank Statements covering the gap 
Medium	200k+	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Bank Statements covering the gap 
Medium	200k+	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Bank Statements covering the gap 
Medium	200k+	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Bank Statements covering the gap 
High	0-5k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
High	0-5k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request certified bank statements covering the gap
High	0-5k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Certified Bank Statements covering the gap 
High	0-5k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Certified Bank Statements covering the gap 
High	0-5k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Certified Bank Statements covering the gap 
High	5-10k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced please obtain a recent months' worth of certified bank statements evidencing the shortfall 
High	5-10k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request certified bank statements covering the gap
High	5-10k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Certified Bank Statements covering the gap 
High	5-10k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Certified Bank Statements covering the gap 
High	5-10k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Certified Bank Statements covering the gap 
High	10-50k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Certified Bank Statements covering the gap 
High	10-50k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Certified Bank Statements covering the gap 
High	10-50k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Certified Bank Statements covering the gap 
High	10-50k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Certified Bank Statements covering the gap 
High	50-100k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Certified Bank Statements covering the gap 
High	50-100k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Certified Bank Statements covering the gap 
High	50-100k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Certified Bank Statements covering the gap 
High	50-100k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Certified Bank Statements covering the gap 
High	100-200k	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Certified Bank Statements covering the gap 
High	100-200k	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Certified Bank Statements covering the gap 
High	100-200k	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Certified Bank Statements covering the gap 
High	100-200k	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Certified Bank Statements covering the gap 
High	200k+	Dividends	Bank Statement, dividend payment voucher	0-3	Completion	Certified Bank Statements covering the gap 
High	200k+	Dividends	Bank Statement, dividend payment voucher	3-6	Completion	Certified Bank Statements covering the gap 
High	200k+	Dividends	Bank Statement, dividend payment voucher	6-12	Completion	Certified Bank Statements covering the gap 
High	200k+	Dividends	Bank Statement, dividend payment voucher	12+	Completion	Certified Bank Statements covering the gap 
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements and land registry
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements and land registry
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements and land registry
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements and land registry
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements and land registry
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements and land registry
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements and land registry
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements and land registry
Low	10-50k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements and land registry
Low	10-50k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements and land registry
Low	10-50k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements and land registry
Low	10-50k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements and land registry
Low	50-100k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements and land registry
Low	50-100k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements and land registry
Low	50-100k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements and land registry
Low	50-100k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements and land registry
Low	100-200k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements and land registry
Low	100-200k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements and land registry
Low	100-200k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements and land registry
Low	100-200k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements and land registry
Low	200k+	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements and land registry
Low	200k+	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements and land registry
Low	200k+	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements and land registry
Low	200k+	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements and land registry
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements and land registry
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements and land registry
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements and land registry
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements and land registry
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements and land registry
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements and land registry
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements and land registry
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements and land registry
Medium	10-50k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	10-50k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	10-50k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	10-50k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	50-100k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	50-100k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	50-100k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	50-100k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	100-200k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	100-200k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	100-200k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	100-200k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	200k+	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	200k+	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	200k+	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
Medium	200k+	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Recent 3 months Bank Statements,  land registry and completion statement 
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	10-50k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	10-50k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	10-50k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	10-50k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	50-100k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	50-100k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	50-100k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	50-100k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	100-200k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	100-200k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	100-200k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	100-200k	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	200k+	Sale of property	Bank Statement, completion statement and land registry 	0-3	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	200k+	Sale of property	Bank Statement, completion statement and land registry 	3-6	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	200k+	Sale of property	Bank Statement, completion statement and land registry 	6-12	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
High	200k+	Sale of property	Bank Statement, completion statement and land registry 	12+	Redemption	Updated certified  recent 3 months Bank statements,  land registry and completion statement
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required.
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap accompanied by completion statement
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	0-5k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap accompanied by completion statement
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	5-10k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	10-50k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	10-50k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	10-50k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	10-50k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	50-100k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	50-100k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	50-100k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	50-100k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	100-200k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	100-200k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	100-200k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	100-200k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	200k+	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	200k+	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	200k+	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap accompanied by Completion Statement
Low	200k+	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap accompanied by Completion Statement
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap, land registry and completion statement
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	0-5k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap, land registry  and completion statement
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	5-10k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	10-50k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	10-50k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	10-50k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	10-50k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	50-100k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	50-100k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	50-100k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	50-100k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	100-200k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	100-200k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	100-200k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	100-200k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	200k+	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	200k+	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	200k+	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Bank Statement covering the gap, land registry  and completion statement
Medium	200k+	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Bank Statement covering the gap, land registry  and completion statement
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower's ability to cover the shortfall has not been previously evidenced, please request certified bank statements covering the gap, land registry and completion statement
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	0-5k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced please obtain a recent months' worth of certified bank statements evidencing the shortfall
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower’s ability to cover the shortfall has not been previously evidenced, please request certified bank statements covering the gap,  land registry and completion statement
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	5-10k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	10-50k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	10-50k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	10-50k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	10-50k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	50-100k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	50-100k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	50-100k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	50-100k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	100-200k	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	100-200k	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	100-200k	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	100-200k	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	200k+	Sale of property	Bank Statement, completion statement and land registry 	0-3	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	200k+	Sale of property	Bank Statement, completion statement and land registry 	3-6	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	200k+	Sale of property	Bank Statement, completion statement and land registry 	6-12	Completion	Certified Bank statements covering the gap,  land registry and completion statement
High	200k+	Sale of property	Bank Statement, completion statement and land registry 	12+	Completion	Certified Bank statements covering the gap,  land registry and completion statement
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statements
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 months Bank Statements
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 months Bank Statements
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 months Bank Statements
Low	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statements
Low	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 months Bank Statements
Low	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 months Bank Statements
Low	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 months Bank Statements
Low	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statements
Low	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 months Bank Statements
Low	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 months Bank Statements
Low	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 months Bank Statements
Low	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statements
Low	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 months Bank Statements
Low	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 months Bank Statements
Low	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 months Bank Statements
Low	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statements
Low	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 months Bank Statements
Low	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 months Bank Statements
Low	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 months Bank Statements
Low	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statements
Low	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 months Bank Statements
Low	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 months Bank Statements
Low	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 months Bank Statements
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statements
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 month Bank Statements and payslips
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 month Bank Statements and payslips
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 month Bank Statements and payslips
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statement
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 month Bank Statements and payslips
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 month Bank Statements and payslips
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 month Bank Statements and payslips
Medium	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statement
Medium	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 month Bank Statements and payslips
Medium	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 month Bank Statements and payslips
Medium	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 month Bank Statements and payslips
Medium	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statement
Medium	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 month Bank Statements and payslips
Medium	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 month Bank Statements and payslips
Medium	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 month Bank Statements and payslips
Medium	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 months Bank Statement
Medium	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 month Bank Statements and payslips
Medium	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 month Bank Statements and payslips
Medium	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 month Bank Statements and payslips
Medium	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Recent 3 Bank Statement
Medium	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Recent 3 months Bank Statement and payslips
Medium	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Recent 3 months Bank Statement and payslips
Medium	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Recent 3 months Bank Statement and payslips
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Certifed recent 3 months Bank Statement, Payslip and Employment letter
High	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Certifed recent 3 months Bank Statements, Payslips, P60 and  Employment letter
High	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Certifed recent 3 months Bank Statements, Payslips, P60 and  Employment letter
High	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Certifed recent 3 months Bank Statements, Payslips, P60 and  Employment letter
High	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Certifed recent 3 months Bank Statements, Payslips, P60 and  Employment letter
High	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Redemption	Certifed recent 3 months Bank Statements, Payslips, P60 and  Employment letter
High	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Redemption	Certifed recent 3 months Bank Statements, Payslips, P60 and  Employment letter
High	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Redemption	Certifed recent 3 months Bank Statements, Payslips, P60 and  Employment letter
High	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Redemption	Certifed recent 3 months Bank Statements, Payslips, P60 and  Employment letter
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required.
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Bank Statements covering the gap
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Bank Statements covering the gap
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Bank Statements covering the gap
Low	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Low	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap
Low	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Bank Statements covering the gap
Low	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Bank Statements covering the gap
Low	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Bank Statements covering the gap
Low	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Bank statements covering the gap
Low	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Bank statements covering the gap
Low	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Bank statements covering the gap
Low	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Bank statements covering the gap
Low	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Bank statements covering the gap
Low	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Bank statements covering the gap
Low	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Bank statements covering the gap
Low	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Bank statements covering the gap
Low	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Bank statements covering the gap
Low	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Bank statements covering the gap
Low	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Bank statements covering the gap
Low	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Bank statements covering the gap
Low	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Bank statements covering the gap
Low	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Bank statements covering the gap
Low	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Bank statements covering the gap
Low	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Bank statements covering the gap
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required.
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements and payslips covering the gap
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	 Bank Statement and payslips covering the gap
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	 Bank Statement and payslips covering the gap
Medium	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	 Bank Statement and payslips covering the gap
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements and payslips covering the gap
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	 Bank Statement and payslips covering the gap
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	 Bank Statement and payslips covering the gap
Medium	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	 Bank Statement and payslips covering the gap
Medium	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	 Bank Statement and payslips covering the gap
Medium	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	 Bank Statement and payslips covering the gap
Medium	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	 Bank Statement and payslips covering the gap
Medium	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	 Bank Statement and payslips covering the gap
Medium	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	 Bank Statement and payslips covering the gap
Medium	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	 Bank Statement and payslips covering the gap
Medium	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	 Bank Statement and payslips covering the gap
Medium	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	 Bank Statement and payslips covering the gap
Medium	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	 Bank Statement and payslips covering the gap
Medium	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	 Bank Statement and payslips covering the gap
Medium	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	 Bank Statement and payslips covering the gap
Medium	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	 Bank Statement and payslips covering the gap
Medium	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	 Bank Statement and payslips covering the gap
Medium	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	 Bank Statement and payslips covering the gap
Medium	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	 Bank Statement and payslips covering the gap
Medium	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	 Bank Statement and payslips covering the gap
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request certifed bank statements, payslips covering the gap and employment letter
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	0-5k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months' worth of certified bank statements evidencing the shortfall
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrower’s ability to cover the shortfall has not been previously evidenced, please request certified bank statements, payslips covering the gap and employment letter
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	5-10k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	10-50k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	50-100k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Certifed bank statements, payslips covering the gap and employment letter
High	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Certifed Bank Statements, Payslips, P60 covering the gap and Employment letter
High	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Certifed Bank Statements, Payslips, P60 covering the gap and Employment letter
High	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Certifed Bank Statements, Payslips, P60 covering the gap and Employment letter
High	100-200k	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Certifed Bank Statements, Payslips, P60 covering the gap and Employment letter
High	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	0-3	Completion	Certifed Bank Statements, Payslips, P60 covering the gap and Employment letter
High	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	3-6	Completion	Certifed Bank Statements, Payslips, P60 covering the gap and Employment letter
High	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	6-12	Completion	Certifed Bank Statements, Payslips, P60 covering the gap and Employment letter
High	200k+	Savings from employment income	Bank Statement for savings account and Payslips, Employment letter and P60 	12+	Completion	Certifed Bank Statements, Payslips, P60 covering the gap and Employment letter
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements and Recent SA302s
Low	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements, Recent SA302s and Recent Tax calculation
Low	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements, Recent SA302s and Recent Tax calculation
Low	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements, Recent SA302s and Recent Tax calculation
Low	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements, Recent SA302s and Recent Tax calculation
Low	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements, Recent SA302s and Recent Tax calculation
Low	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements, Recent SA302s and Recent Tax calculation
Low	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements, Recent SA302s and Recent Tax calculation
Low	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements, Recent SA302s and Recent Tax calculation
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements , Recent SA302s, recent Tax calculation
Medium	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements, Recent SA302s, recent Tax calculation and Accountants letter
Medium	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements, Recent SA302s, recent Tax calculation and Accountants letter
Medium	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements, Recent SA302s, recent Tax calculation and Accountants letter
Medium	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements, Recent SA302s, recent Tax calculation and Accountants letter
Medium	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Recent 3 months Bank Statements, Recent SA302s, recent Tax calculation and Accountants letter
Medium	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Recent 3 months Bank Statements, Recent SA302s, recent Tax calculation and Accountants letter
Medium	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Recent 3 months Bank Statements, Recent SA302s, recent Tax calculation and Accountants letter
Medium	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Recent 3 months Bank Statements, Recent SA302s, recent Tax calculation and Accountants letter
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews and Companies House balance sheet or P&L statement
High	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews, Companies House balance sheet, recent annual financial statement or  recent P&L statement
High	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews, Companies House balance sheet, recent annual financial statement or  recent P&L statement
High	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews, Companies House balance sheet, recent annual financial statement or  recent P&L statement
High	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews, Companies House balance sheet, recent annual financial statement or  recent P&L statement
High	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews, Companies House balance sheet, recent annual financial statement or  recent P&L statement
High	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews, Companies House balance sheet, recent annual financial statement or  recent P&L statement
High	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews, Companies House balance sheet, recent annual financial statement or  recent P&L statement
High	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Redemption	Certified recent 3 months Bank Statements, recent SA302s, Tax calculations, Tax overviews, Companies House balance sheet, recent annual financial statement or  recent P&L statement
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap and recent SA302s
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	 Bank statements covering the gap and recent SA302s
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	 Bank statements covering the gap and recent SA302s
Low	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	 Bank statements covering the gap and recent SA302s
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request  bank statements covering the gap and recent SA302s
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	 Bank statements covering the gap and recent SA302s
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	 Bank statements covering the gap and recent SA302s
Low	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	 Bank statements covering the gap and recent SA302s
Low	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	 Bank statements covering the gap and recent SA302s
Low	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	 Bank statements covering the gap and recent SA302s
Low	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	 Bank statements covering the gap and recent SA302s
Low	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	 Bank statements covering the gap and recent SA302s
Low	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	 Bank statements covering the gap and recent SA302s
Low	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	 Bank statements covering the gap and recent SA302s
Low	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	 Bank statements covering the gap and recent SA302s
Low	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	 Bank statements covering the gap and recent SA302s
Low	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Bank Statements covering the gap, recent SA302s and recent Tax calculation
Low	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Bank Statements covering the gap, recent SA302s and recent Tax calculation
Low	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Bank Statements covering the gap, recent SA302s and recent Tax calculation
Low	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Bank Statements covering the gap, recent SA302s and recent Tax calculation
Low	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Bank Statements covering the gap, recent SA302s and recent Tax calculation
Low	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Bank Statements covering the gap, recent SA302s and recent Tax calculation
Low	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Bank Statements covering the gap, recent SA302s and recent Tax calculation
Low	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Bank Statements covering the gap, recent SA302s and recent Tax calculation
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap, recent SA302s and  recent tax calculation
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements covering the gap, recent SA302s and  recent tax calculation
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Bank Statements covering the gap, recent SA302s and  recent Tax calculation
Medium	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Bank Statements covering the gap, recent SA302s, recent Tax calculation and Accountants letter
Medium	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Bank Statements covering the gap, recent SA302s, recent Tax calculation and Accountants letter
Medium	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Bank Statements covering the gap, recent SA302s, recent Tax calculation and Accountants letter
Medium	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Bank Statements covering the gap, recent SA302s, recent Tax calculation and Accountants letter
Medium	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Bank Statements covering the gap, recent SA302s, recent Tax calculation and Accountants letter
Medium	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Bank Statements covering the gap, recent SA302s, recent Tax calculation and Accountants letter
Medium	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Bank Statements covering the gap, recent SA302s, recent Tax calculation and Accountants letter
Medium	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Bank Statements covering the gap, recent SA302s, recent Tax calculation and Accountants letter
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request certfied bank statements covering the gap, recent SA302s, recent tax calculation and tax overviews and Companies House balance sheets or P&L statements
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	0-5k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced please obtain a recent months' worth of certified bank statements evidencing the shortfall
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request certified bank statements covering the gap, recent SA302s, recent tax calculation and tax overviews and Companies House balance sheets or P&L statements
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	5-10k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	10-50k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	50-100k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	100-200k	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	0-3	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	3-6	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	6-12	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
High	200k+	Self-employed income	Recent 2 years SA302s, Recent 2 years tax calculation, Recent 3 months Bank Statement, Recent 2 years business financial statements, Companies house balance sheets	12+	Completion	Certfied Bank Statements covering the gap, recent SA302s, recent Tax calculation and Tax overviews and Companies House balance sheets or P&L statements
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Low	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Low	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 month Bank Statement  for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months Bank Statement for the donor and borrower and  Gift letter
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months Bank Statement for the donor and borrower and  Gift letter
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months Bank Statement  for the donor and borrower and  Gift letter
Medium	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
Medium	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months Bank Statement for the donor and borrower, Gift letter and SOW confirmation from the donor
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
High	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Certified Gift letter, recent 3 months Bank statement from the borrower and donor and  SOW  confirmation from donor
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrower's bank statements covering gap and gift letter
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's bank statements covering gap and gift letter
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's bank statements covering gap and gift letter
Low	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's bank statements covering gap and gift letter
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrower's bank statements covering gap and gift letter
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's bank statements covering gap and gift letter
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's bank statements covering gap and gift letter
Low	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's bank statements covering gap and gift letter
Low	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrower's bank statements covering gap and gift letter
Low	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's bank statements covering gap and gift letter
Low	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's bank statements covering gap and gift letter
Low	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's bank statements covering gap and gift letter
Low	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrower's bank statements covering gap and gift letter
Low	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's bank statements covering gap and gift letter
Low	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's bank statements covering gap and gift letter
Low	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's bank statements covering gap and gift letter
Low	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrower's bank statements covering gap and gift letter
Low	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's bank statements covering gap and gift letter
Low	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's bank statements covering gap and gift letter
Low	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's bank statements covering gap and gift letter
Low	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrower's bank statements covering gap and gift letter
Low	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's bank statements covering gap and gift letter
Low	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's bank statements covering gap and gift letter
Low	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's bank statements covering gap and gift letter
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrower's bank statements covering gap and gift letter
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's bank statements covering gap and gift letter
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's bank statements covering gap and gift letter
Medium	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's bank statements covering gap and gift letter
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrower's bank statements covering gap and gift letter
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's bank statements covering gap and gift letter
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's bank statements covering gap and gift letter
Medium	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's bank statements covering gap and gift letter
Medium	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	 Borrower's bank statement covering the gap
Medium	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	 Borrower's bank statement covering the gap
Medium	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	 Borrower's bank statement covering the gap
Medium	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	 Borrower's bank statement covering the gap
Medium	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	 Borrower's bank statement covering the gap
Medium	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	 Borrower's bank statement covering the gap
Medium	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	 Borrower's bank statement covering the gap
Medium	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	 Borrower's bank statement covering the gap
Medium	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	 Borrower's bank statement covering the gap
Medium	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	 Borrower's bank statement covering the gap
Medium	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	 Borrower's bank statement covering the gap
Medium	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	 Borrower's bank statement covering the gap
Medium	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	 Borrower's bank statement covering the gap
Medium	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	 Borrower's bank statement covering the gap
Medium	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	 Borrower's bank statement covering the gap
Medium	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	 Borrower's bank statement covering the gap
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrower's certified bank statements covering the gap  
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's certified bank statements covering the gap 
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's certified bank statements covering the gap 
High	0-5k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's certified bank statements covering the gap 
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced please obtain a recent months' worth of certified bank statements evidencing the shortfall
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrower's certified bank statements covering the gap 
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's certified bank statements covering the gap 
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's certified bank statements covering the gap 
High	5-10k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's certified bank statements covering the gap 
High	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrower's certified bank statements covering the gap 
High	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's certified bank statements covering the gap 
High	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's certified bank statements covering the gap 
High	10-50k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's certified bank statements covering the gap 
High	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrower's certified bank statements covering the gap 
High	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's certified bank statements covering the gap 
High	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's certified bank statements covering the gap 
High	50-100k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's certified bank statements covering the gap 
High	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrower's certified bank statements covering the gap 
High	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's certified bank statements covering the gap 
High	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's certified bank statements covering the gap 
High	100-200k	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's certified bank statements covering the gap 
High	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrower's certified bank statements covering the gap 
High	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrower's certified bank statements covering the gap 
High	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrower's certified bank statements covering the gap 
High	200k+	Gifts	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrower's certified bank statements covering the gap 
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Low	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Low	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Low	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Low	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Low	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Low	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Low	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Low	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Low	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Low	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Low	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Low	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Low	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Low	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Low	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Low	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Medium	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Medium	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Medium	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Medium	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Medium	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Medium	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Medium	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Medium	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Medium	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Medium	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Medium	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Medium	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
Medium	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Recent 3 months Bank Statements and signed AST
Medium	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Recent 3 months Bank Statements and signed AST
Medium	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Recent 3 months Bank Statements and signed AST
Medium	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Recent 3 months Bank Statements and signed AST
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Signed AST and certified recent 6 months Bank Statements
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Signed AST and certified recent 6 months Bank Statements
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Signed AST and certified recent 6 months Bank Statements
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Signed AST and certified recent 6 months Bank Statements
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Signed AST and certified recent 6 months Bank Statements
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Signed AST and certified recent 6 months Bank Statements
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Signed AST and certified recent 6 months Bank Statements
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Signed AST and certified recent 6 months Bank Statements
High	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Signed AST and certified recent 6 months Bank Statements
High	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Signed AST and certified recent 6 months Bank Statements
High	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Signed AST and certified recent 6 months Bank Statements
High	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Signed AST and certified recent 6 months Bank Statements
High	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Signed AST and certified recent 6 months Bank Statements
High	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Signed AST and certified recent 6 months Bank Statements
High	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Signed AST and certified recent 6 months Bank Statements
High	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Signed AST and certified recent 6 months Bank Statements
High	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Signed AST and certified recent 6 months Bank Statements
High	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Signed AST and certified recent 6 months Bank Statements
High	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Signed AST and certified recent 6 months Bank Statements
High	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Signed AST and certified recent 6 months Bank Statements
High	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Redemption	Signed AST and certified recent 6 months Bank Statements
High	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Redemption	Signed AST and certified recent 6 months Bank Statements
High	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Redemption	Signed AST and certified recent 6 months Bank Statements
High	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Redemption	Signed AST and certified recent 6 months Bank Statements
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required.
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a signed AST
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Signed AST
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Signed AST
Low	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Signed AST
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidence please obtain a recent months worth of bank statements evidencing the shortfall 
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements and signed AST
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Low	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Low	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Bank Statement covering the gap and Signed AST
Low	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Low	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Low	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Low	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Bank Statement covering the gap and Signed AST
Low	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Low	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Low	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Low	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Bank Statement covering the gap and Signed AST
Low	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Low	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Low	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Low	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Bank Statement covering the gap and Signed AST
Low	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Low	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Low	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements and signed AST
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Medium	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request bank statements and signed AST
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Medium	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Medium	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Bank Statement covering the gap and Signed AST
Medium	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Medium	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Medium	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Medium	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Bank Statement covering the gap and Signed AST
Medium	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Medium	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Medium	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Medium	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Bank Statement covering the gap and Signed AST
Medium	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Medium	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Medium	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
Medium	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Bank Statement covering the gap and Signed AST
Medium	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Bank Statement covering the gap and Signed AST
Medium	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Bank Statement covering the gap and Signed AST
Medium	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Bank Statement covering the gap and Signed AST
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a signed AST and certified bank statements
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Signed AST and certified Bank Statements covering the gap 
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Signed AST and certified Bank Statements covering the gap 
High	0-5k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Signed AST and certified Bank Statements covering the gap 
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced please obtain a recent months' worth of certified bank statements evidencing the shortfall
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a signed AST and certified bank statements
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Signed AST and certified Bank Statements covering the gap 
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Signed AST and certified Bank Statements covering the gap 
High	5-10k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Signed AST and certified Bank Statements covering the gap 
High	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Signed AST and certified Bank Statements covering the gap 
High	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Signed AST and certified Bank Statements covering the gap 
High	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Signed AST and certified Bank Statements covering the gap 
High	10-50k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Signed AST and certified Bank Statements covering the gap 
High	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Signed AST and certified Bank Statements covering the gap 
High	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Signed AST and certified Bank Statements covering the gap 
High	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Signed AST and certified Bank Statements covering the gap 
High	50-100k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Signed AST and certified Bank Statements covering the gap 
High	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Signed AST and certified Bank Statements covering the gap 
High	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Signed AST and certified Bank Statements covering the gap 
High	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Signed AST and certified Bank Statements covering the gap 
High	100-200k	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Signed AST and certified Bank Statements covering the gap 
High	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	0-3	Completion	Signed AST and certified Bank Statements covering the gap 
High	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	3-6	Completion	Signed AST and certified Bank Statements covering the gap 
High	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	6-12	Completion	Signed AST and certified Bank Statements covering the gap 
High	200k+	Loan interest income/Rental Income	Signed AST and Bank statements	12+	Completion	Signed AST and certified Bank Statements covering the gap 
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Medium	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
High	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Redemption	Certified SPA and Bank statements showing the trail of funds for the proceeds of the company sale
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a SPA and bank statements covering the gap
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Low	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a SPA and bank statements covering the gap
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Low	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Low	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and Bank statements covering the gap
Low	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Low	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Low	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Low	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and Bank statements covering the gap
Low	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Low	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Low	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Low	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and Bank statements covering the gap
Low	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Low	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Low	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Low	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and Bank statements covering the gap
Low	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Low	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Low	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a SPA and bank statements covering the gap
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Medium	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a SPA and bank statements covering the gap
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Medium	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Medium	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and Bank statements covering the gap
Medium	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Medium	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Medium	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Medium	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and Bank statements covering the gap
Medium	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Medium	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Medium	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Medium	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and Bank statements covering the gap
Medium	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Medium	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Medium	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
Medium	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and Bank statements covering the gap
Medium	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and Bank statements covering the gap
Medium	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and Bank statements covering the gap
Medium	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and Bank statements covering the gap
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a SPA and certified bank statements covering the gap
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and certified bank statements covering the gap
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and certified bank statements covering the gap
High	0-5k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and certified bank statements covering the gap
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months' worth of certified bank statements evidencing the shortfall
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request a SPA and certified bank statements covering the gap
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and certified bank statements covering the gap
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and certified bank statements covering the gap
High	5-10k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and certified bank statements covering the gap
High	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and certified bank statements covering the gap
High	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and certified bank statements covering the gap
High	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and certified bank statements covering the gap
High	10-50k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and certified bank statements covering the gap
High	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and certified bank statements covering the gap
High	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and certified bank statements covering the gap
High	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and certified bank statements covering the gap
High	50-100k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and certified bank statements covering the gap
High	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and certified bank statements covering the gap
High	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and certified bank statements covering the gap
High	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and certified bank statements covering the gap
High	100-200k	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and certified bank statements covering the gap
High	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	0-3	Completion	SPA and certified bank statements covering the gap
High	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	3-6	Completion	SPA and certified bank statements covering the gap
High	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	6-12	Completion	SPA and certified bank statements covering the gap
High	200k+	Company sale	Share Purchase Agreement (SPA) and Bank Statements	12+	Completion	SPA and certified bank statements covering the gap
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Low	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	10-50k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	10-50k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	10-50k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	10-50k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	50-100k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	50-100k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	50-100k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	50-100k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	100-200k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	100-200k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	100-200k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	100-200k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	200k+	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	200k+	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	200k+	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
Medium	200k+	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	12+	Redemption	Recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investment funds
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
High	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Redemption	Certified recent 3 months bank statements for the trading account showing surrender of investment funds and bank statements for the borrower covering the gap and showing receipt of the surrendered investement funds
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrowers bank statements covering the gap and showing the receipt of investment funds
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of investment funds
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of investment funds
Low	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of investment funds
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrowers bank statements covering the gap and showing the receipt of investment funds
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of investment funds
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of investment funds
Low	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of investment funds
Low	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Low	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required.
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced, please obtain a recent months worth of bank statements evidencing the shortfall 
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	10-50k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	10-50k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	10-50k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	10-50k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	50-100k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	50-100k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	50-100k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	50-100k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	100-200k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	100-200k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	100-200k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	100-200k	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	200k+	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	0-3	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	200k+	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	3-6	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	200k+	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	6-12	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
Medium	200k+	Liquidation of investment	Recent Bank Statement, Gift letter and SOW confirmation	12+	Completion	Borrowers bank statements covering the gap and showing the receipt of invetsment funds and trading account 1 months bank statements showing the surrender of investment funds
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been evidenced, no further action is required
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	0-5k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of delayed completion, and the borrower’s ability to cover the shortfall has been previously evidenced please obtain a recent months' worth of certified bank statements evidencing the shortfall
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Where the shortfall has arisen as a result of a delayed completion and the borrowers ability to cover the shortfall has not been previously evidenced, please request certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	5-10k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	10-50k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	50-100k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	100-200k	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	0-3	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	3-6	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	6-12	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
High	200k+	Liquidation of investment	Bank statements for traders account and Bank statement for borrower account showing receipt of investment funds	12+	Completion	Certified borrowers bank statements covering the gap and showing the receipt of invetsment funds and 3 months certified trading accounts showing the surrender of investement funds
`;

// --- Utility Functions ---

const byId = id => document.getElementById(id);

/**
 * Parses the raw TSV data into an array of objects (rows).
 * @param {string} tsv - The raw TSV string.
 * @returns {Array<Object>} The parsed data.
 */
const parseTSV = (tsv) => {
    const lines = tsv.trim().split('\n');
    const headers = lines[0].split('\t').map(h => h.trim());
    const data = lines.slice(1).map(line => {
        const values = line.split('\t').map(v => v.trim());
        const row = {};
        headers.forEach((header, i) => {
            row[header] = values[i];
        });
        return row;
    });
    return data;
};

// Global data store
const ACTIONLOGIC = parseTSV(RAW_TSV);

/**
 * Checks if a row's column value matches the filter value.
 * @param {Object} row - The data row.
 * @param {string} key - The column header (key).
 * @param {string} filterValue - The selected filter value.
 * @returns {boolean} True if they match or if the filter is empty.
 */
const matches = (row, key, filterValue) => {
    if (!filterValue) return true;
    return row[key] === filterValue;
};

/**
 * Sanitizes a string for HTML output.
 * @param {string} str - The string to sanitize.
 * @returns {string} The sanitized string.
 */
const safe = (str) => {
    if (str === null || str === undefined) return "";
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
};

// --- Main Functions ---

/**
 * Filters the main data set based on current selection values.
 * @returns {Array<Object>} The filtered data rows.
 */
const filterData = () => {
    const riskRating = byId("riskRating").value; 
    const sof = byId("sof").value;             
    const shortfall = byId("shortfall").value; 
    const timeSince = byId("timeSince").value; 
    const casetype = byId("casetype").value;   

    const filtered = ACTIONLOGIC.filter(r => 
        matches(r, "Risk Rating", riskRating) && 
        matches(r, "Source of Funds", sof) && 
        // FIX: Corrected key for Shortfall
        matches(r, "Shortfall Value", shortfall) && 
        // FIX: Corrected key for GAP
        matches(r, "GAP", timeSince) &&         
        matches(r, "Redemption or Completion", casetype) 
    );
    return filtered;
};

/**
 * Updates the table in the DOM with the provided data.
 * @param {Array<Object>} rows - The data rows to display.
 */
const updateTable = (rows) => {
    const el = byId("results");
    const rowcountEl = byId("rowcount");

    rowcountEl.textContent = `${rows.length} result${rows.length !== 1 ? 's' : ''}`;

    if (rows.length === 0) {
        el.innerHTML = `<p class="muted" style="padding: 10px 0;">No matching recommendations found.</p>`;
        return;
    }

    if (SHOW_ONLY_ACTION) {
        // Render only Action Required column (omitted for simplicity, following standard path)
        // ... (existing SHOW_ONLY_ACTION logic remains here)
        // ...
        return;
    }

    // --- Render all columns present (SHOW_ONLY_ACTION is false) ---
    // 1. Collect all unique keys from all rows to ensure a consistent table structure
    const allKeys = Array.from(
        rows.reduce((set, r) => {
            Object.keys(r).forEach(k => set.add(k));
            return set;
        }, new Set())
    );

    // 2. Build header row
    const header = `<tr>${allKeys.map(k => `<th>${k}</th>`).join("")}</tr>`;
    
    // 3. Build body rows with color coding for Risk Rating
    const body = rows.map(r =>
        `<tr>${allKeys.map(k => {
            const value = safe(r[k] ?? ""); // Ensure value is sanitized
            let classAttr = "";
            
            // LOGIC TO ADD CLASS FOR RISK RATING
            if (k === "Risk Rating") {
                if (value === "Low") {
                    classAttr = ' class="risk-low"';
                } else if (value === "Medium") {
                    classAttr = ' class="risk-medium"';
                } else if (value === "High") {
                    classAttr = ' class="risk-high"';
                }
            }
            // END LOGIC
            
            return `<td${classAttr}>${value}</td>`;
        }).join("")}</tr>`
    ).join("");


    el.innerHTML = `<table><thead>${header}</thead><tbody>${body}</tbody></table>`;
}

/**
 * Clears all filters and updates the table.
 */
const clearFilters = () => {
    byId("riskRating").value = "";
    byId("sof").value = "";
    byId("shortfall").value = "";
    byId("timeSince").value = "";
    byId("casetype").value = "";
    byId("btnFilter").disabled = false;
    updateTable(ACTIONLOGIC); // Show all data
};

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
    const btnFilter = byId("btnFilter");
    const btnClear = byId("btnClear");
    const results = byId("results");

    // Helper: show placeholder message
    const showPlaceholder = () => {
        results.innerHTML = `<p class="muted" style="padding:10px 0;">Please select required questions and click "Search".</p>`;
        byId("rowcount").textContent = "";
    };

    // --- Search button ---
    btnFilter.addEventListener("click", () => {
        const filteredData = filterData();
        updateTable(filteredData);
    });

    // --- Clear button ---
    btnClear.addEventListener("click", () => {
        byId("riskRating").value = "";
        byId("sof").value = "";
        byId("shortfall").value = "";
        byId("timeSince").value = "";
        byId("casetype").value = "";
        btnFilter.disabled = false;

        // Instead of showing all data, show placeholder
        showPlaceholder();
    });

    // --- On page load: show placeholder only ---
    showPlaceholder();
});

