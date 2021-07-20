import { isBoolean, isEmpty, isUndefined } from "lodash";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

export const useQueryParams = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const history = useHistory();

  const [querys, setQuerys] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    setQuerys(handleRemovingUnusedFilters(queryParamsToObject()));
  }, []);
  const handleParseFilterParams = (params: { [x: string]: string }) =>
    Object.keys(params)
      .filter((key) => params[key] !== undefined)
      .map((key) =>
        [key, params[key]].map((value) => encodeURIComponent(value!)).join("=")
      )
      .join("&");

  const handleRemovingUnusedFilters = (filter: { [x: string]: string }) =>
    Object.keys(filter).reduce(function (r, e) {
      if (
        !isEmpty(filter[e]) ||
        !isUndefined(filter[e]) ||
        isBoolean(filter[e])
      )
        r[e] = filter[e];

      return r;
    }, {} as any);

  const queryParamsToObject = () => {
    return window.location.search
      .slice(1)
      .split("&")
      .map((p) => p.split("="))
      .reduce<any>((obj, pair) => {
        const [key, value] = pair.map(decodeURIComponent);

        obj[key] = value;

        return obj;
      }, {});
  };

  const setQuery = (obj: { [key: string]: string | number | boolean }) => {
    const propsName = Object.keys(obj);

    propsName.forEach((prop, index) => {
      const stringValue = obj[prop]?.toString();

      if (!isEmpty(stringValue)) {
        query.set(prop, stringValue);

        history.push({
          pathname: window.location.pathname,
          search: query.toString(),
        });
      } else {
        query.delete(prop);
        history.push({
          pathname: window.location.pathname,
          search: query.toString(),
        });
      }
    });

    setQuerys(handleRemovingUnusedFilters(queryParamsToObject()));
  };

  return { querys, setQuery };
};
