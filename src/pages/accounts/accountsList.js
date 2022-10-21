import bar from '@src/_img/pictures/bar.png';
import passport from '@src/_img/accounts/passport.svg';
import document from '@src/_img/accounts/document.svg';

const accountsList = [
  {
    href: '/accounts_everyday',
    info: {
      title: {
        text: 'Products — Current Account',
        title: 'Everyday Current Account'
      },
      article: {
        title: 'Current Account',
        img: { bar },
        buttonName: 'Apply online now'
      },
      aside: {
        topSection: {
          title:
            'A flexible, and accessible approach for your day-to-day banking.',
          text: 'For individuals, startups, or companies. Manage your account with online and mobile banking. Support and advice are available 24 hours a day – speak to a financial expert through our app, over the phone, or visit one of our branches'
        },
        middleSection: [
          {
            title: 'What you’ll recieve',
            list: [
              'Easy day-to-day transactions',
              'Get started with an initial deposit of just JOD 200, or equivalent in foreign currency',
              'We’ll give you free standing orders to settle your Current Account balance from any of your accounts with us',
              'We’ll send you a debit card – use it to shop, at home, abroad, or online and access your funds from any ATM'
            ]
          }
        ],
        bottomSection: {
          title: 'What you need to apply',
          card: {
            passport: {
              img: { passport },
              text: 'A valid national ID, passport, a valid residency permit, your birth certificate, or ID for minors.'
            },
            document: {
              img: { document },
              text: 'A recent utility bill – electricity, water, etc'
            },
            buttonName: 'Apply online now'
          }
        }
      }
    }
  },
  {
    href: '/accounts_interest',
    info: {
      title: {
        text: 'Products — savings Account',
        title: 'Interest Earning Savings'
      },
      article: {
        title: 'Savings Account',
        img: { bar },
        buttonName: 'Apply online now'
      },
      aside: {
        topSection: {
          title: 'Your savings, made simple.',
          text: 'Our secure, flexible way to help you plan for your future. For individuals, startups or companies. Manage your savings with online and mobile banking. Get support and advice, anytime – speak to an expert in the app, over the phone or come in to one of our branches.'
        },
        middleSection: [
          {
            title: 'What you’ll recieve',
            list: [
              'Get started with an initial deposit of just JOD 100, or equivalent in foreign currency',
              'Credit interest every six months if you have the minimum balance of JOD 200',
              'We’ll send you a debit card – use it to shop, at home, abroad, or online and access your funds from any ATM',
              'Keep track of your saving with annual, quarterly, and monthly statements – paper, by email order, and mobile'
            ]
          }
        ],
        bottomSection: {
          title: 'What you need to apply',
          card: {
            passport: {
              img: { passport },
              text: 'A valid national ID, passport, a valid residency permit, your birth certificate, or ID for minors.'
            },
            document: {
              img: { document },
              text: 'A recent utility bill – electricity, water, etc'
            },
            buttonName: 'Apply online now'
          }
        }
      }
    }
  },
  {
    href: '/accounts_tharaa',
    info: {
      title: {
        text: 'Products — Accounts',
        title: 'Tharaa Savings Account'
      },
      article: {
        title: 'Tharaa Savings Account',
        img: { bar },
        buttonName: 'Apply online now'
      },
      aside: {
        topSection: {
          title: 'Invest in your fortune.',
          text: 'Our Tharaa Savings Account helps you save for your future and win life-changing prizes. Give yourself the opportunity to win cash prizes daily, weekly, monthly- year round. Manage your savings with online and mobile banking Get support and advice, anytime – speak to an expert in the app, on the phone, or come in to one of our branches'
        },
        middleSection: [
          {
            title: 'What you could win',
            list: [
              'Every day: JOD 999 cash for 10 winners each',
              'Every week: JOD 10,000 cash for 4 winners each',
              'Every two months: JOD 50,000 cash for one winner',
              'Every three month: JOD 200,000 cash for one winner',
              'A special prize during the holy month of Ramadan: JOD 5,000 cash daily for 5 winners each',
              'Our annual grand prize: JOD 1,000,000 cash'
            ]
          },
          {
            title: 'What you’ll recieve',
            list: [
              'Get started with an initial deposit of just JOD 100, or equivalent in foreign currency',
              'Credit interest every six months if you have the minimum balance of JOD 200',
              'We’ll send you a debit card – use it to shop, at home, abroad, or online and access your funds from any ATM',
              'Keep track of your saving with annual, quarterly, and monthly statements – paper, by email order, and mobile'
            ]
          }
        ],
        bottomSection: {
          title: 'What you need to apply',
          card: {
            passport: {
              img: { passport },
              text: 'A valid national ID, passport, a valid residency permit, your birth certificate, or ID for minors.'
            },
            document: {
              img: { document },
              text: 'A recent utility bill – electricity, water, etc'
            },
            buttonName: 'Apply online now'
          }
        }
      }
    }
  },
  {
    href: '/accounts_ibny',
    info: {
      title: {
        text: 'Products — Accounts',
        title: 'IBNY Savings Account'
      },
      article: {
        title: 'IBNY Savings Account',
        img: { bar },
        buttonName: 'Apply online now'
      },
      aside: {
        topSection: {
          title: 'Take care of your children’s future.',
          text: 'Our personal savings account to set your children up for life. Give yourself the opportunity to win school and university tuition fees for your child. Manage your savings with online and mobile banking. Get support and advice, anytime – speak to an expert in the app, on the phone, or come in to one of our branches'
        },
        middleSection: [
          {
            title: 'What you’ll recieve',
            list: [
              'Yearly returns starting at 1.75%',
              'Returns of up to 6.25% after ten years of regular saving'
            ]
          },
          {
            title: 'What you could win',
            list: [
              'JOD 20,000 in university tuition fees',
              'JOD 4,000 in school tuition fees',
              'A monthly draw for various prizes including laptops, PlayStation4 and Xbox'
            ]
          },
          {
            title: 'Terms',
            list: [
              'You’ll be in control of the account until your child turns 18',
              'For this account, we accept Jordanian Dinar'
            ]
          }
        ],
        bottomSection: {
          title: 'What you need to apply',
          card: {
            passport: {
              img: { passport },
              text: 'A valid national ID, passport, a valid residency permit, your birth certificate, or ID for minors.'
            },
            document: {
              img: { document },
              text: 'A recent utility bill – electricity, water, etc'
            },
            buttonName: 'Apply online now'
          }
        }
      }
    }
  },
  {
    href: '/accounts_salary',
    info: {
      title: {
        text: 'Products — Accounts',
        title: 'Salary Account'
      },
      article: {
        title: 'Salary Account',
        img: { bar },
        buttonName: 'Apply online now'
      },
      aside: {
        topSection: {
          title: 'Your salary, sorted',
          text: 'We’ll help you look after your earnings, so you can start making the most of your money, today. Quick, easy ways to transfer over to us. Get notifications on your phone when your salary arrives. We’re here to help, anytime – speak to an expert in the app, over the phone or come in to one of our branches'
        },
        middleSection: [
          {
            title: 'What you’ll recieve',
            list: [
              'Join our provident fund and we’ll contribute up to 50% of the value of the savings you’ve built up',
              'Get a payday loan of up to 30% of your monthly salary amount',
              'You will also be eligible to win life changing prizes with our Tharaa Savings Account',
              'Your company will enjoy a corporate rebate of up to 0.5% of all net salaries transferred'
            ]
          }
        ],
        bottomSection: {
          title: 'What you need to apply',
          card: {
            passport: {
              img: { passport },
              text: 'A valid national ID, passport, a valid residency permit, your birth certificate, or ID for minors.'
            },
            document: {
              img: { document },
              text: 'A recent salary slip, letter of employment, your employment contract, or statement of account covering the last six months'
            },
            buttonName: 'Apply online now'
          }
        }
      }
    }
  },
  {
    href: '/accounts_shorouq',
    info: {
      title: {
        text: 'Products — Accounts',
        title: 'Shorouq Savings Account'
      },
      article: {
        title: 'Shorouq Savings Account',
        img: { bar },
        buttonName: 'Apply online now'
      },
      aside: {
        topSection: {
          title: 'Take charge of your future.',
          text: 'Get the financial security you want with a savings account just for women. Our Savings Account is for all women – mothers, businesswomen, students, employees, or homeowners Get started with our mobile banking app, so you’re free to manage your savings online Get support and advice, anytime – speak to an expert in the app, over the phone, or come in to one of our branches \n Be in with the chance to win cash salary prizes!'
        },
        middleSection: [
          {
            title: 'What you could win',
            list: [
              'Every day: JOD 500 cash for 5 winners each',
              'Every week: JOD 5,000 cash for one winner',
              'Every month: JOD 50,000 cash for one winner',
              'Every two months: Monthly salary of JOD 1,000 for 25 years'
            ]
          }
        ],
        bottomSection: {
          title: 'What you need to apply',
          card: {
            passport: {
              img: { passport },
              text: 'A valid national ID, passport, a valid residency permit, your birth certificate, or ID for minors.'
            },
            document: {
              img: { document },
              text: 'A recent utility bill – electricity, water, etc'
            },
            buttonName: 'Apply online now'
          }
        }
      }
    }
  }
];

export default accountsList;
