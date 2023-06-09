import {
    Bars3CenterLeftIcon,
    BellIcon,
    ClockIcon,
    CogIcon,
    CreditCardIcon,
    DocumentChartBarIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    XMarkIcon
  } from '@heroicons/react/24/outline'
  import {Fragment, useState, useEffect } from 'react'
  import {Dialog, Menu, Transition} from '@headlessui/react'
  import {doc, getFirestore, setDoc} from "firebase/firestore";
  import * as AccountService from '@/service/AccountService'
  import * as CustomerService from "@/service/CustomerService";
  import {Address} from "@/model/Address";
  import {Customer} from "@/model/Customer";
  import {account} from "@/model/Account";
  import * as DepositService from '@/service/depositService';
  import { deposit } from '@/model/Deposit';
  import { useHistory } from 'react-router-dom';
  
  import {app} from '@/config/firebaseConfig';
  import {
    BanknotesIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
  } from '@heroicons/react/20/solid'
  import {getAuth} from "firebase/auth";
  
  const db = getFirestore(app);
  const auth = getAuth();
  
  function useStateParams(
    initialState,
    paramsName,
    serialize,
    deserialize 
  ) {
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);
  
    const existingValue = search.get(paramsName);
    const [state, setState] = useState<T>(
      existingValue ? deserialize(existingValue) : initialState
    );
  
    useEffect(() => {
      // Updates state when user navigates backwards or forwards in browser history
      if (existingValue && deserialize(existingValue) !== state) {
        setState(deserialize(existingValue));
      }
    }, [existingValue]);
  
    const onChange = (s) => {
      setState(s);
      const searchParams = new URLSearchParams(history.location.search);
      searchParams.set(paramsName, serialize(s));
      const pathname = history.location.pathname;
      history.push({ pathname, search: searchParams.toString() });
    };
  
    return [state, onChange];
  }

  const navigation = [
    {name: 'Home', href: '#', icon: HomeIcon, current: true},
    {name: 'History', href: '#', icon: ClockIcon, current: false},
    {name: 'Balances', href: '#', icon: ScaleIcon, current: false},
    {name: 'Cards', href: '#', icon: CreditCardIcon, current: false},
    {name: 'Recipients', href: '#', icon: UserGroupIcon, current: false},
    {name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false},
  ]
  const secondaryNavigation = [
    {name: 'Settings', href: '#', icon: CogIcon},
    {name: 'Help', href: '#', icon: QuestionMarkCircleIcon},
    {name: 'Privacy', href: '#', icon: ShieldCheckIcon},
  ]
  const cards = [
    {name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45'},
    // More items...
  ]
  const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  
  export default function Dashboard() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [uid, setUID] = useState("");
  
    async function upload(id) {
        await setDoc(doc(db, "users", "uid"), {
            customer_id: id,
        });
  
    }
  
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.uid)
            setUID(user.uid)
            upload(user.uid)
        }
    });
  
    // let customer = new Customer("Joe", "Banker", new Address("123 Main St", "12345", "New York", "NY", "15501"));
  
    // CustomerService.createCustomer(customer).then((result) => {
    //     let custId = result.objectCreated._id
    //     console.log(custId, result.objectCreated._id)
  
    //     AccountService.createAccount(new account("Checking", "Tests", 1000, 100000), custId).then((result) => {
    //         console.log(result);
    //         let accountId = result.objectCreated._id;
    //         DepositService.createDeposit(accountId, new deposit("balance", "4/2/2023", "completed", 10000.00, "Test data")).then((result) => {
    //             console.log(result);
    //         })
    //     })
    // });
  
    // DepositService.createDeposit("64291bb29683f20dd51877a8", new deposit("balance", "4/3/2023", "completed", 10000.00, "Test data")).then((result) => {
    //     console.log(result);
    // })
  
    const [transactions, setTransactions] = useState([])

    const [custId, setCustId] = useStateParams("", "custId", (s) => s, (s) => s);
  
    useEffect(()=> {
        CustomerService.getAllCustomers.then((result) => {
            console.log(result)
            setTransactions(result)
        })
        // DepositService.getAccountDepositByCustomer("64291bb29683f20dd51877a7").then((result) => {
        //     setTransactions(result)
        //     console.log(result)
        // })
    }, [])
  
  
    return (
        <>
          <div className="min-h-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-600 " />
                </Transition.Child>
    
                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-blue-700 pb-4 pt-5">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute right-0 top-0 -mr-12 pt-2">
                          <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex flex-shrink-0 items-center px-4">
                        <img
                          className="h-8 w-auto"
                          src="./Group.png"
                          alt=""
                        />
                      </div>
                      <nav
                        className="mt-5 h-full flex-shrink-0 divide-y divide-blue-800 overflow-y-auto"
                        aria-label="Sidebar"
                      >
                        <div className="space-y-1 px-2">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-blue-800 text-white'
                                  : 'text-blue-100 hover:bg-blue-600 hover:text-white',
                                'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-blue-200" aria-hidden="true" />
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="mt-6 pt-6">
                          <div className="space-y-1 px-2">
                            {secondaryNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-blue-100 hover:bg-blue-600 hover:text-white"
                              >
                                <item.icon className="mr-4 h-6 w-6 text-blue-200" aria-hidden="true" />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </nav>
                    </Dialog.Panel>
                  </Transition.Child>
                  <div className="w-14 flex-shrink-0" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
    
            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-grow flex-col overflow-y-auto bg-blue-700 pb-4 pt-5">
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className=" mx-auto"
                    src="../Group.png"
                    alt="   "
                  />
                </div>
                <nav className="mt-5 flex flex-1 flex-col divide-y divide-blue-800 overflow-y-auto" aria-label="Sidebar">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white',
                          'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-blue-200" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="space-y-1 px-2">
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-blue-100 hover:bg-blue-600 hover:text-white"
                        >
                          <item.icon className="mr-4 h-6 w-6 text-blue-200" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </div>
    
            <div className="flex flex-1 flex-col lg:pl-64 ">
              <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none lg:hidden">
                <button
                  type="button"
                  className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
    
              </div>
              <main className="flex-1 pb-8 px-10 mt-4">
                {/* Page header */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    
                  <div className="bg-blue-700 rounded-lg shadow-sm shadow-blue-700 mt-4">
                    <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                      <div className="py-6 md:flex md:items-center md:justify-between">
                        <div className="min-w-0 flex-1">
                          {/* Profile */}
                          <div className="flex items-center">
                            <img
                              className="hidden h-16 w-16 rounded-full sm:block"
                              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/njjdh2yq2keaw2ly43su"
                              alt=""
                            />
                            <div>
                              <div className="flex items-center">
                                <img
                                  className="h-16 w-16 rounded-full sm:hidden"
                                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/njjdh2yq2keaw2ly43su"
                                  alt=""
                                />
                                <h1 className="ml-3 text-2xl font-bold leading-7 text-white sm:truncate sm:leading-9">
                                  Good morning, Pranav Ramesh
                                </h1>
                              </div>
                              <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                <dt className="sr-only">Company</dt>
                                <dd className="flex items-center text-sm font-medium capitalize text-white sm:mr-6">
                                  <BuildingOfficeIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-white"
                                    aria-hidden="true"
                                  />
                                  Fetching...
                                </dd>
                                <dt className="sr-only">Account status</dt>
                                <dd className="mt-3 flex items-center text-sm font-medium capitalize text-white sm:mr-6 sm:mt-0">
                                  <ShieldCheckIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-white"
                                    aria-hidden="true"
                                  />
                                  Full Access Control
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Add money
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Send money
                          </button>
    
    
    
                        </div>
                      </div>
                    </div>
                  </div>
    
                </div>
                <div className="mt-8">
                  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-lg font-medium leading-6 text-gray-900">AT A GLANCE</h2>
                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Card */}
                      {cards.map((card) => (
                        <div key={card.name} className="overflow-hidden rounded-lg bg-slate-200 shadow">
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                              </div>
                              <div className="ml-5 w-0 flex-1">
                                <dl>
                                  <dt className="truncate text-sm  uppercase tracking-tight text-gray-500">{card.name}</dt>
                                  <dd>
                                    <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
    
                        </div>
                      ))}
                    </div>
                  </div>
    
    
    
                  <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
                    RECENT ACTIVITY
                  </h2>
    
                  {/* Activity list (smallest breakpoint only) */}
                  <div className="shadow sm:hidden">
                    <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                      {transactions.map((transaction) => (
                        <li key={transaction.id}>
                          <a href={transaction.href} className="block bg-white px-4 py-4 hover:bg-gray-50">
                            <span className="flex items-center space-x-4">
                              <span className="flex flex-1 space-x-2 truncate">
                                <BanknotesIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="flex flex-col truncate text-sm text-gray-500">
                                  <span className="truncate">{transaction.name}</span>
                                  <span>
                                    <span className="font-medium text-gray-900">{transaction.amount}</span>{' '}
                                    {transaction.currency}
                                  </span>
                                  <time dateTime={transaction.datetime}>{transaction.date}</time>
                                </span>
                              </span>
                              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
    
                    <nav
                      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
                      aria-label="Pagination"
                    >
                      <div className="flex flex-1 justify-between">
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Previous
                        </a>
                        <a
                          href="#"
                          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Next
                        </a>
                      </div>
                    </nav>
                  </div>
    
                  {/* Activity table (small breakpoint and up) */}
                  <div className="hidden sm:block">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                      <div className="mt-2 flex flex-col">
                        <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th
                                  className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                  scope="col"
                                >
                                  Transaction
                                </th>
                                <th
                                  className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                                  scope="col"
                                >
                                  Amount
                                </th>
                                <th
                                  className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                                  scope="col"
                                >
                                  Status
                                </th>
                                <th
                                  className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                                  scope="col"
                                >
                                  Date
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {transactions.map((transaction) => (
                                <tr key={transaction.id} className="bg-white">
                                  <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                    <div className="flex">
                                      <a href={transaction.href} className="group inline-flex space-x-2 truncate text-sm">
                                        <BanknotesIcon
                                          className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                          aria-hidden="true"
                                        />
                                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                                          {transaction.description}
                                        </p>
                                      </a>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                    <span className="font-medium text-gray-900">{transaction.amount}</span>
                                    {transaction.currency}
                                  </td>
                                  <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                                    <span
                                      className={classNames(
                                        statusStyles[transaction.status],
                                        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize'
                                      )}
                                    >
                                      {transaction.status}
                                    </span>
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                    <time dateTime={transaction.transaction_date}>{transaction.transaction_date}</time>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
    
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
    
        </>
      )
    }