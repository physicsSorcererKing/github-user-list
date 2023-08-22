/**
 * @generated SignedSource<<981960719e46fb335d59d9000e655ab9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UserListQuery$variables = {
  count: number;
  since?: string | null;
};
export type UserListQuery$data = {
  readonly search: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly avatarUrl?: any;
        readonly isSiteAdmin?: boolean;
        readonly login?: string;
      } | null;
    } | null> | null;
  };
};
export type UserListQuery = {
  response: UserListQuery$data;
  variables: UserListQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'count',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'since',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'since',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'count',
      },
      {
        kind: 'Literal',
        name: 'query',
        value: 'type:user',
      },
      {
        kind: 'Literal',
        name: 'type',
        value: 'USER',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'cursor',
      storageKey: null,
    },
    v3 = {
      kind: 'InlineFragment',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'login',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'avatarUrl',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'isSiteAdmin',
          storageKey: null,
        },
      ],
      type: 'User',
      abstractKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'UserListQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'SearchResultItemConnection',
          kind: 'LinkedField',
          name: 'search',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'SearchResultItemEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                v2 /*: any*/,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [v3 /*: any*/],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'UserListQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'SearchResultItemConnection',
          kind: 'LinkedField',
          name: 'search',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'SearchResultItemEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                v2 /*: any*/,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                    v3 /*: any*/,
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'id',
                          storageKey: null,
                        },
                      ],
                      type: 'Node',
                      abstractKey: '__isNode',
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '59c35dc8d81eec9bec85760a3347b91c',
      id: null,
      metadata: {},
      name: 'UserListQuery',
      operationKind: 'query',
      text: 'query UserListQuery(\n  $count: Int!\n  $since: String\n) {\n  search(query: "type:user", type: USER, first: $count, after: $since) {\n    edges {\n      cursor\n      node {\n        __typename\n        ... on User {\n          login\n          avatarUrl\n          isSiteAdmin\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = '5c4f1a5c0c71d53eef5e958c0d6a61b3';

export default node;
