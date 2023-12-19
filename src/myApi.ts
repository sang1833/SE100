/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Token {
  token?: string | null;
}

export interface LoginDtoRequest {
  email?: string | null;
  password?: string | null;
}

export interface RequestEmployeeDTO {
  email?: string | null;
  fullName?: string | null;
  phoneNumber?: string | null;
  avatar?: string | null;
  /** @format date-time */
  birth_day?: string;
  gender?: boolean;
  cmnd?: string | null;
  address?: string | null;
}

export interface RequestNewDepartment {
  name?: string | null;
  code?: string | null;
}

export interface RequestPositionDTO {
  title?: string | null;
  code?: string | null;
  /** @format int64 */
  salary_coeffcient?: number;
}

export interface SettingDTO {
  company_name?: string | null;
  company_code?: string | null;
  /** @format int32 */
  start_time_hour?: number;
  /** @format int32 */
  start_time_minute?: number;
  /** @format int32 */
  salary_per_coef?: number;
  /** @format int32 */
  payment_date?: number;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title se100_cs
 * @version 1.0
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags se100_cs
   * @name GetRoot
   * @request GET:/
   */
  getRoot = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  api = {
    /**
     * No description
     *
     * @tags Attendance
     * @name AttendanceGetListByDateList
     * @request GET:/api/Attendance/getListByDate
     */
    attendanceGetListByDateList: (
      query?: {
        /** @format int32 */
        day?: number;
        /** @format int32 */
        month?: number;
        /**
         * @format int32
         * @default 2023
         */
        year?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Attendance/getListByDate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attendance
     * @name AttendanceCheckinCreate
     * @request POST:/api/Attendance/checkin
     */
    attendanceCheckinCreate: (data: Token, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Attendance/checkin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attendance
     * @name AttendanceCheckCreate
     * @request POST:/api/Attendance/check
     */
    attendanceCheckCreate: (data: Token, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Attendance/check`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attendance
     * @name AttendanceTestUpdateAttendanceAdminUpdate
     * @request PUT:/api/Attendance/test/update_attendance_admin
     */
    attendanceTestUpdateAttendanceAdminUpdate: (
      query?: {
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Attendance/test/update_attendance_admin`,
        method: "PUT",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentGetAllList
     * @request GET:/api/Department/getAll
     */
    departmentGetAllList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Department/getAll`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentCreateNewCreate
     * @request POST:/api/Department/createNew
     */
    departmentCreateNewCreate: (
      data: RequestNewDepartment,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Department/createNew`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentUpdateOneUpdate
     * @request PUT:/api/Department/updateOne
     */
    departmentUpdateOneUpdate: (
      data: RequestNewDepartment,
      query?: {
        /** @format int64 */
        id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Department/updateOne`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentDeleteOneDelete
     * @request DELETE:/api/Department/deleteOne
     */
    departmentDeleteOneDelete: (
      query?: {
        code?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Department/deleteOne`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeCreateNewCreate
     * @request POST:/api/Employee/createNew
     */
    employeeCreateNewCreate: (
      data: RequestEmployeeDTO,
      query?: {
        department_code?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Employee/createNew`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeListNonPositionList
     * @request GET:/api/Employee/list-non-position
     */
    employeeListNonPositionList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Employee/list-non-position`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeGetByDepartmentCodeList
     * @request GET:/api/Employee/getByDepartmentCode
     */
    employeeGetByDepartmentCodeList: (
      query?: {
        departmentCode?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Employee/getByDepartmentCode`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeLinkToPositionUpdate
     * @request PUT:/api/Employee/link-to-position
     */
    employeeLinkToPositionUpdate: (
      query?: {
        /** @format int64 */
        userId?: number;
        /** @format int64 */
        position_id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Employee/link-to-position`,
        method: "PUT",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeLoginCreate
     * @request POST:/api/Employee/login
     */
    employeeLoginCreate: (data: LoginDtoRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Employee/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeUpdateOneUpdate
     * @request PUT:/api/Employee/updateOne
     */
    employeeUpdateOneUpdate: (
      data: RequestEmployeeDTO,
      query?: {
        /** @format int64 */
        id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Employee/updateOne`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeDeleteOneDelete
     * @request DELETE:/api/Employee/deleteOne
     */
    employeeDeleteOneDelete: (
      query?: {
        /** @format int64 */
        id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Employee/deleteOne`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mail
     * @name MailCreate
     * @request POST:/api/Mail
     */
    mailCreate: (
      query?: {
        /** @format int64 */
        emp_id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Mail`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name PositionCreateNewCreate
     * @request POST:/api/Position/createNew
     */
    positionCreateNewCreate: (
      data: RequestPositionDTO,
      query?: {
        departmentCode?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Position/createNew`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Position
     * @name PositionRemovePositionUpdate
     * @request PUT:/api/Position/remove-position
     */
    positionRemovePositionUpdate: (
      query?: {
        /** @format int64 */
        userId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/Position/remove-position`,
        method: "PUT",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Setting
     * @name SettingGetList
     * @request GET:/api/Setting/get
     */
    settingGetList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Setting/get`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Setting
     * @name SettingUpdateOneUpdate
     * @request PUT:/api/Setting/updateOne
     */
    settingUpdateOneUpdate: (data: SettingDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Setting/updateOne`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
