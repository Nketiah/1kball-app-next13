import { format } from 'date-fns'
//import ColumnFilter from './ColumnFilter';


type Data = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  dob: string;
  age: number;
  country: string;
  mobile: string;
};

type Column<T> = {
  Header: string;
  Footer?: string;
  accessor: keyof T;
  Cell?: unknown
  Filter?: unknown
  disableFilters?: boolean
}




export const COLUMNS: readonly Column<Data>[] = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    //Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "firstname",
    //Filter: ColumnFilter
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "lastname",
    //Filter: ColumnFilter
  },
  // {
  //     Header: 'Email',
  //     Footer: 'Email',
  //     accessor: 'email'
  // },
  // {
  //     Header: 'Gender',
  //     Footer: 'Gender',
  //     accessor: 'gender'
  // },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "dob",
    Cell: ({ value }: {value: Date}) => { return format(new Date(value), 'dd/MM/yyyy ')}, // HH:mm:ss
    //Filter: ColumnFilter
    disableFilters: true
  },
  // {
  //     Header: 'Age',
  //     Footer: 'Age'
  //     accessor: 'age'
  // },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    //Filter: ColumnFilter
    disableFilters: true
  },
  {
    Header: "Mobile",
    Footer: "Mobile",
    accessor: "mobile",
    //Filter: ColumnFilter
    disableFilters: true
  },
]

export const GROUPED_COLUMNS: any = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "firstname",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "lastname",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "dob",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Mobile",
        Footer: "Mobile",
        accessor: "mobile",
      },
    ],
  },
];
