import React from 'react';
import PropTypes from 'prop-types';

import { SortingIndicator } from './parts/sorting-indicator';

export const TableHeaderCell = ({
  style, column,
  sortingEnabled, sortDirection, changeSortDirection,
  groupingEnabled, groupByColumn,
}) => {
  const align = column.align || 'left';
  const invertedAlign = align === 'left' ? 'right' : 'left';

  const gropingControl = groupingEnabled && (
    <div
      onClick={(e) => {
        e.stopPropagation();
        groupByColumn(e);
      }}
      style={{
        float: invertedAlign,
        textAlign: invertedAlign,
        width: '14px',
      }}
    >
      <i
        className="glyphicon glyphicon-th-list"
        style={{
          top: '0',
          fontSize: '9px',
          margin: '-5px',
          padding: '5px',
        }}
      />
    </div>
  );

  const sortingControl = sortingEnabled && (
    align === 'right' ? (
      <span
        className={sortDirection ? 'text-primary' : ''}
      >
        <SortingIndicator
          direction={sortDirection}
          style={{ visibility: sortDirection ? 'visible' : 'hidden' }}
        />
        &nbsp;
        {column.title}
      </span>
    ) : (
      <span
        className={sortDirection ? 'text-primary' : ''}
      >
        {column.title}
        &nbsp;
        <SortingIndicator
          direction={sortDirection}
          style={{ visibility: sortDirection ? 'visible' : 'hidden' }}
        />
      </span>
    )
  );

  return (
    <th
      style={{
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        cursor: sortingEnabled && !column.type && 'pointer',
        ...style,
      }}
      onClick={(e) => {
        if (!sortingEnabled) return;
        e.stopPropagation();
        changeSortDirection({ keepOther: e.shiftKey });
      }}
    >
      {gropingControl}
      <div
        style={{
          [`margin${column.align === 'right' ? 'Left' : 'Right'}`]: '14px',
          textAlign: align,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {sortingEnabled ? sortingControl : (
          column.title
        )}
      </div>
    </th>
  );
};
TableHeaderCell.defaultProps = {
  style: null,
  sortingEnabled: false,
  sortDirection: undefined,
  changeSortDirection: undefined,
  groupingEnabled: false,
  groupByColumn: undefined,
};
TableHeaderCell.propTypes = {
  column: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  style: PropTypes.shape(),
  sortingEnabled: PropTypes.bool,
  sortDirection: PropTypes.oneOf(['asc', 'desc']),
  changeSortDirection: PropTypes.func,
  groupingEnabled: PropTypes.bool,
  groupByColumn: PropTypes.func,
};