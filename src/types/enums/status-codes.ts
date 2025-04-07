export enum STATUS_CODES_ENUM {
  //* 1xx Informational

  //* Continue - The server has received the request headers and the client should proceed to send the request body
  CONTINUE = 100,

  //* Switching Protocols - The server is switching protocols as requested by the client
  SWITCHING_PROTOCOLS = 101,

  //* Processing - The server has received and is processing the request, but no response is available yet
  PROCESSING = 102,

  //* 2xx Success

  //* OK - The request has succeeded
  OK = 200,

  //* Created - The request has been fulfilled and resulted in a new resource being created
  CREATED = 201,

  //* Accepted - The request has been accepted for processing, but the processing has not been completed
  ACCEPTED = 202,

  //* Non-Authoritative Information - The returned metadata is different from what was originally available
  NON_AUTHORITATIVE_INFORMATION = 203,

  //* No Content - The server has fulfilled the request but there is no content to send
  NO_CONTENT = 204,

  //* Reset Content - The server has fulfilled the request and the client should reset the document view
  RESET_CONTENT = 205,

  //* Partial Content - The server is delivering only part of the resource due to a range header
  PARTIAL_CONTENT = 206,

  //* 3xx Redirection

  //* Multiple Choices - The request has more than one possible response
  MULTIPLE_CHOICES = 300,

  //* Moved Permanently - The URL of the requested resource has been changed permanently
  MOVED_PERMANENTLY = 301,

  //* Found - The URL of the requested resource has been changed temporarily
  FOUND = 302,

  //* See Other - The client should get the resource at another URI with a GET request
  SEE_OTHER = 303,

  //* Not Modified - The client can use its cached version of the requested resource
  NOT_MODIFIED = 304,

  //* Use Proxy - The requested resource must be accessed through the proxy given by the Location field
  USE_PROXY = 305,

  //* Temporary Redirect - The URL of the requested resource has been changed temporarily
  TEMPORARY_REDIRECT = 307,

  //* Permanent Redirect - The URL of the requested resource has been changed permanently
  PERMANENT_REDIRECT = 308,

  //* 4xx Client Error

  //* Bad Request - The server cannot or will not process the request due to an apparent client error
  BAD_REQUEST = 400,

  //* Unauthorized - Authentication is required and has failed or has not been provided
  UNAUTHORIZED = 401,

  //* Payment Required - Reserved for future use
  PAYMENT_REQUIRED = 402,

  //* Forbidden - The server understood the request but refuses to authorize it
  FORBIDDEN = 403,

  //* Not Found - The requested resource could not be found
  NOT_FOUND = 404,

  //* Method Not Allowed - The method specified in the request is not allowed for the resource
  METHOD_NOT_ALLOWED = 405,

  //* Not Acceptable - The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request
  NOT_ACCEPTABLE = 406,

  //* Proxy Authentication Required - The client must first authenticate itself with the proxy
  PROXY_AUTHENTICATION_REQUIRED = 407,

  //* Request Timeout - The server timed out waiting for the request
  REQUEST_TIMEOUT = 408,

  //* Conflict - The request could not be completed due to a conflict with the current state of the resource
  CONFLICT = 409,

  //* Gone - The requested resource is no longer available and will not be available again
  GONE = 410,

  //* Length Required - The request did not specify the length of its content, which is required by the requested resource
  LENGTH_REQUIRED = 411,

  //* Precondition Failed - The server does not meet one of the preconditions that the requester put on the request
  PRECONDITION_FAILED = 412,

  //* Payload Too Large - The request is larger than the server is willing or able to process
  PAYLOAD_TOO_LARGE = 413,

  //* URI Too Long - The URI provided was too long for the server to process
  URI_TOO_LONG = 414,

  //* Unsupported Media Type - The request entity has a media type which the server or resource does not support
  UNSUPPORTED_MEDIA_TYPE = 415,

  //* Range Not Satisfiable - The client has asked for a portion of the file, but the server cannot supply that portion
  RANGE_NOT_SATISFIABLE = 416,

  //* Expectation Failed - The server cannot meet the requirements of the Expect request-header field
  EXPECTATION_FAILED = 417,

  //* I'm a teapot - The server refuses to brew coffee because it is, permanently, a teapot
  IM_A_TEAPOT = 418,

  //* Unprocessable Entity - The request was well-formed but was unable to be followed due to semantic errors
  UNPROCESSABLE_ENTITY = 422,

  //* Too Early - The server is unwilling to risk processing a request that might be replayed
  TOO_EARLY = 425,

  //* Upgrade Required - The client should switch to a different protocol
  UPGRADE_REQUIRED = 426,

  //* Precondition Required - The origin server requires the request to be conditional
  PRECONDITION_REQUIRED = 428,

  //* Too Many Requests - The user has sent too many requests in a given amount of time
  TOO_MANY_REQUESTS = 429,

  //* Request Header Fields Too Large - The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

  //* Unavailable For Legal Reasons - The server is denying access to the resource as a consequence of a legal demand
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  //* 5xx Server Error

  //* Internal Server Error - The server has encountered a situation it doesn't know how to handle
  INTERNAL_SERVER_ERROR = 500,

  //* Not Implemented - The request method is not supported by the server and cannot be handled
  NOT_IMPLEMENTED = 501,

  //* Bad Gateway - The server, while acting as a gateway or proxy, received an invalid response from the upstream server
  BAD_GATEWAY = 502,

  //* Service Unavailable - The server is not ready to handle the request
  SERVICE_UNAVAILABLE = 503,

  //* Gateway Timeout - The server, while acting as a gateway or proxy, did not get a response in time from the upstream server
  GATEWAY_TIMEOUT = 504,

  //* HTTP Version Not Supported - The HTTP version used in the request is not supported by the server
  HTTP_VERSION_NOT_SUPPORTED = 505,

  //* Variant Also Negotiates - The server has an internal configuration error
  VARIANT_ALSO_NEGOTIATES = 506,

  //* Insufficient Storage - The server is unable to store the representation needed to complete the request
  INSUFFICIENT_STORAGE = 507,

  //* Loop Detected - The server detected an infinite loop while processing the request
  LOOP_DETECTED = 508,

  //* Not Extended - Further extensions to the request are required for the server to fulfill it
  NOT_EXTENDED = 510,

  //* Network Authentication Required - The client needs to authenticate to gain network access
  NETWORK_AUTHENTICATION_REQUIRED = 511
}
