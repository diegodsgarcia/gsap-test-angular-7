
class ListResult<T> {
  metadata: {
    itemPerPage: number;
    pageCount: number;
    pageNo: number;
    recNo: number;
    totalCount: number;
  };
  records: T[];
}

const ListResultSource = {
  metadata: {
    itemPerPage: '_metadata.ItemPerPage',
    pageCount: '_metadata.PageCount',
    pageNo: '_metadata.PageNo',
    recNo: '._metadata.RecNo',
    totalCount: '_metadata.TotalCount',
  },
  records: '_records',
};

export { ListResult, ListResultSource };

