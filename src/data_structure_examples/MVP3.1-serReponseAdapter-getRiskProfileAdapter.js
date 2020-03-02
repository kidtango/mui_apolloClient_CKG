export const MVPRes = {
  compoundRisk: 0.3833333333333334,
  riskBuckets: [
    {
      id: '016d6df7-442f-4b4e-91d1-6c05493249fe',
      severity: '1',
      likelihood: '1',
      numberOfRisks: 1,
      numberOfLowConfidenceRisks: 0,
      averageConfidenceLevel: 0.9235294117647059,
      risks: [
        {
          id: '72762418-efd0-4f30-b013-3c8c73d94e63',
          risk: {
            id: '19',
            title: 'Operational slugging',
            description:
              'Unrealistic production targets means that production is adjusted often due to lack of pressure support',
            cause: 'Operational induced Slugging',
            consequence:
              'Instability in topsides, causing trips and loss of production, fatigue on the FTAs, pressure on FPSO Subsea Ops to stabilise flowline following each adjustment',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [],
          processFailures: [
            {
              id: '4',
              process: {
                id: '4',
                __typename: 'Process'
              },
              possibleFailure: {
                id: '13',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '19',
                __typename: 'Risk'
              },
              __typename: 'ProcessFailure'
            }
          ],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '1',
          likelihood: '1',
          confidenceLevel: 0.9235294117647059,
          lowConfidence: false,
          score: 0.1111111111111111,
          contributors: [
            {
              id: '9d93b300-0f4a-4f93-9804-c290c68c36d4',
              featureName: 'id',
              featureValue: '19',
              weight: 0.59,
              __typename: 'Contributor'
            },
            {
              id: '724bb0c3-c0c4-4b3a-a88a-6e77805ea81e',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.55,
              __typename: 'Contributor'
            },
            {
              id: 'bd3123b4-61f3-45d1-acd9-ca09188563a8',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.55,
              __typename: 'Contributor'
            },
            {
              id: '6ad4a897-fe98-4498-a4da-7be75e5fcd78',
              featureName: 'title',
              featureValue: 'operational',
              weight: 0.35,
              __typename: 'Contributor'
            },
            {
              id: '5b6e0ac7-d9b3-4975-957c-0d301a78686b',
              featureName: 'cause',
              featureValue: 'induced',
              weight: 0.29,
              __typename: 'Contributor'
            },
            {
              id: 'd558c2a4-5cb8-42c8-9427-e36a7eaabbc1',
              featureName: 'title',
              featureValue: 'slugging',
              weight: 0.19,
              __typename: 'Contributor'
            },
            {
              id: 'e1961534-50a5-4db0-9cf2-18c9dd9a9c3d',
              featureName: 'cause',
              featureValue: 'operational',
              weight: 0.14,
              __typename: 'Contributor'
            },
            {
              id: '5c24c187-95ef-4f4e-b9c7-dd466015965c',
              featureName: 'cause',
              featureValue: 'slugging',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: '09527991-234e-42be-b167-6176234bc6d5',
              featureName: 'description',
              featureValue: 'production',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: 'f8a78cfd-d925-4f99-bbb7-0e99b0cf9e37',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 0.08,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: 'aa27ebab-f831-48eb-8ae6-75784cf84af3',
              featureName: 'id',
              featureValue: '101',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '7c86da61-62cf-4437-9030-0c1bb945e9e0',
              featureName: 'id',
              featureValue: '102',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '182e72a0-3a5f-4ef7-9362-2a3008aab80d',
              featureName: 'description',
              featureValue: 'increased',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ea9ed42f-b6c0-4201-8073-0c54f8fae955',
              featureName: 'description',
              featureValue: 'impact',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'c2508c74-a546-4ee5-9ee8-a725c4367efa',
              featureName: 'consequence',
              featureValue: 'design',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '4d77af78-df9e-48dc-96fb-062e876a9f3a',
              featureName: 'id',
              featureValue: '131',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '584a16bc-7e7f-4e97-a7ce-7370082c4826',
              featureName: 'title',
              featureValue: 'people',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ef8f4894-98b0-464a-bb52-39f705443828',
              featureName: 'id',
              featureValue: '129',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '4bc68d04-a301-450a-9ba3-203f31fcbe65',
              featureName: 'id',
              featureValue: '100',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '287aa239-dad5-44cb-8452-405eace3e9d8',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        }
      ],
      __typename: 'RiskBucket'
    },
    {
      id: '61497f07-5418-4a62-b91d-ab7f2ea9c6bd',
      severity: '2',
      likelihood: '1',
      numberOfRisks: 10,
      numberOfLowConfidenceRisks: 0,
      averageConfidenceLevel: 0.9447058823529414,
      risks: [
        {
          id: '995ac020-9b05-4093-b625-0f57751423b2',
          risk: {
            id: '1',
            title: 'Tubular Scale Deposition in T-P01',
            description:
              'Scale could form down hole to T-P01 because scale inhibitor can not be Injected down hole.  The T-P01 down hole chemical injection line was damaged on installation and cannot be used.  This well was restarted on 11/27/2011.  Water cut > 22% therefore risk of scale forming is high.',
            cause: 'Scale will form upstream of the tree injection point',
            consequence: 'Loss production from a well',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '8',
            name: 'Subsurface Production Module',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '1',
              hardware: {
                id: '14',
                name: 'Wellbore',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '15',
                type: 'Hardware Failure',
                name: 'Scale deposition',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '1',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            },
            {
              id: '2',
              hardware: {
                id: '5',
                name: 'Downhole chemical injection line',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '2',
                type: 'Hardware Failure',
                name: 'Damaged on installation',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '2',
              risk: {
                id: '1',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.8470588235294118,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: 'a3122bef-ee3f-4b29-8170-9370f0fef5ad',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'de96cdba-8fca-47f4-8bd0-e95d7a671fce',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'd5cbb027-cd04-432f-a157-4898a88e3d4b',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 0.33,
              __typename: 'Contributor'
            },
            {
              id: '4302ab59-a18d-4a05-8038-a21ba03a7d53',
              featureName: 'id',
              featureValue: '1',
              weight: 0.17,
              __typename: 'Contributor'
            },
            {
              id: 'f5909d2f-27c0-4c2d-8f00-14be1f784003',
              featureName: 'consequence',
              featureValue: 'loss',
              weight: 0.17,
              __typename: 'Contributor'
            },
            {
              id: '7a111528-3e82-4201-a38b-423ec498091f',
              featureName: 'title',
              featureValue: 'scale',
              weight: 0.13,
              __typename: 'Contributor'
            },
            {
              id: '1dcfc7f7-020b-4fd5-9085-09c417ff9285',
              featureName: 'title',
              featureValue: 't-p01',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: '3a6b556e-c58c-42ba-8135-4214d74123fd',
              featureName: 'title',
              featureValue: 'deposition',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: 'ae782895-a88a-490d-958e-56d9b347a1e2',
              featureName: 'description',
              featureValue: '.',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '0573323e-ffbe-4a30-bf41-afd336c7861f',
              featureName: 'cause',
              featureValue: 'scale',
              weight: 0.07,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '03039a38-fc92-4a04-8f3a-3eef97c4647d',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '07835900-7e87-4285-9d2a-732753c8471a',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '5c83bc7d-6e7f-4e6e-aa59-a857c0b4eecb',
              featureName: 'title',
              featureValue: 'supply',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '729b6514-eeb4-40f3-b1fa-6dbba8047511',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '1234a74c-23ad-4fd7-9b6a-f6d5be9e9265',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'c6911c42-e847-436b-b63d-40dd88e301a7',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '56495d42-b165-4f7f-bd1f-a4dcbc7f5020',
              featureName: 'title',
              featureValue: 'umbilical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'b730743c-26f4-43f6-b9db-e26fe9114f01',
              featureName: 'title',
              featureValue: 'scope',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '447ca1d5-5465-407d-821b-d31cb2f39cfe',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'a715708c-752b-481d-8709-f94149679f68',
              featureName: 'cause',
              featureValue: 'opc',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: 'fa6a8af5-bdfc-44cc-a4f6-12b7ca2df025',
          risk: {
            id: '2',
            title: 'Scale Deposition in Low Water cut Wells',
            description:
              'The scale inhibitor topsides pipework and pump discharge pressure are rated to 25 bar. The pressure is insufficient to overcome injection at the production tree and in some cases downhole. Currently this impacts 3 wells, see TechnicalQuery-35.',
            cause: 'Insufficient pressure to allow delivery of scale inhibitor',
            consequence: 'Loss production from a well',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '1',
            name: 'Chemical Injection System',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '3',
              hardware: {
                id: '10',
                name: 'Scale inhibition system',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '6',
                type: 'Hardware Failure',
                name: 'Inadequate design',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '3',
              risk: {
                id: '2',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.8705882352941177,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: '43caac3c-5a60-4652-8c09-1da3f1d60ef6',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'f23802ae-c26b-433d-a6a6-8da6507bf11a',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '96f3ebfc-061b-4470-ad1a-d14eea7733ab',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 0.33,
              __typename: 'Contributor'
            },
            {
              id: '217d77ea-c81e-4092-befb-11f9b9267390',
              featureName: 'id',
              featureValue: '2',
              weight: 0.18,
              __typename: 'Contributor'
            },
            {
              id: '67e1c004-9344-4c61-96fa-191fa325fbfa',
              featureName: 'consequence',
              featureValue: 'loss',
              weight: 0.17,
              __typename: 'Contributor'
            },
            {
              id: '1b8b7e7a-bbee-49f2-9e8d-c9fb6604e43e',
              featureName: 'title',
              featureValue: 'scale',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '8089731c-682b-4a2b-9dc0-191ffa84c706',
              featureName: 'description',
              featureValue: '.',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '00231c99-be46-422e-8e60-47f2bc08c704',
              featureName: 'cause',
              featureValue: 'scale',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '4ae31c95-31f8-4151-9e70-0dd821bd06ec',
              featureName: 'title',
              featureValue: 'deposition',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '90e3d53c-cdb5-49c2-8553-32e68445d4ae',
              featureName: 'title',
              featureValue: 'low',
              weight: 0.07,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '7fa605c7-7b20-4a28-96bd-a6c29584095f',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '8d721c88-08f0-45ca-86d1-c0c28176922d',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '549f8d8e-57d5-41c3-8f44-b21e7188c703',
              featureName: 'title',
              featureValue: 'supply',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '7949566d-33be-4d49-abcd-ee01d9e8dd58',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '97327df0-e3ac-4849-bedc-ae3077c2eebf',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '3ab0267f-6d28-48b9-a19a-7adbc62efcb1',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'fb0bdbc8-2da6-4050-8e8e-289583429022',
              featureName: 'title',
              featureValue: 'umbilical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '21a8f3ce-7681-4f19-ba82-0ee4b1dbb2f0',
              featureName: 'title',
              featureValue: 'scope',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0006e225-e19a-418e-ae41-f5ce35316698',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'bf52abfa-8e68-4b03-bdf7-00cf5fae1f11',
              featureName: 'cause',
              featureValue: 'opc',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '4ebcd3cb-82ac-4509-a198-6d0a970d13da',
          risk: {
            id: '3',
            title: 'Ineffective Corrosion Monitoring on a Continuous Basis',
            description:
              'The subsea ER probes do not provide reliable corrosion rates at steady state conditions.  The more reliable readings are obtained at shutdowns when the fluids reach 4C.  The team and manufacture are still trying to understand how the tool can be used effectively.',
            cause: 'Probes are sensitive changes in production fluid rate',
            consequence:
              'Increase OPEX cost due to having to over inject corrosion inhibitor',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '4',
            name: 'Integrity Management Module',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '4',
              hardware: {
                id: '12',
                name: 'Subsea ER Probe',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '19',
                type: 'Hardware Failure',
                name: 'Unreliable readings',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '3',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.9823529411764705,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: '8b914c3c-07f9-4d01-8a61-e214ea2a21c7',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'a03662b8-41ad-4cd3-9687-83e340879ca6',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '649e7844-e235-43f4-871b-5952b361bef7',
              featureName: 'id',
              featureValue: '3',
              weight: 0.21,
              __typename: 'Contributor'
            },
            {
              id: '3d9186ec-9c51-4c17-b108-c499dac0df18',
              featureName: 'title',
              featureValue: 'monitoring',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: '6e7128e6-1732-43a8-a2fd-661f0efad833',
              featureName: 'description',
              featureValue: '.',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '08396be3-09ad-456c-b142-a098e9f06178',
              featureName: 'consequence',
              featureValue: 'opex',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: 'eba21a9e-5d2a-48ae-8a5c-3f51c0ca11ea',
              featureName: 'title',
              featureValue: 'corrosion',
              weight: 0.06,
              __typename: 'Contributor'
            },
            {
              id: 'e6da41c0-0f22-40d7-bb34-bf4bf88452f4',
              featureName: 'title',
              featureValue: 'basis',
              weight: 0.05,
              __typename: 'Contributor'
            },
            {
              id: '33269c94-222b-4936-aaba-215089d40bf7',
              featureName: 'title',
              featureValue: 'continuous',
              weight: 0.05,
              __typename: 'Contributor'
            },
            {
              id: '8500b326-02f2-4c8f-bb76-e9c89304b456',
              featureName: 'title',
              featureValue: 'ineffective',
              weight: 0.05,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '59548974-26b9-42e7-9427-06c63613ff7f',
              featureName: 'title',
              featureValue: 'riser',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '91d592a0-125b-4737-a32d-b4cf6c985403',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '8519f53f-48c0-4a97-af7c-8d5777a42787',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'b2a5553f-304d-4763-8429-fef18db77913',
              featureName: 'consequence',
              featureValue: 'containment',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '31e8eb9e-8b51-4e23-afeb-1b277f1e5ab8',
              featureName: 'id',
              featureValue: '32',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '314ae5f4-3747-4551-9c02-b7581d680c01',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '9a0ccd39-d6c3-4804-aedc-825971b1768d',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '6d0d41f5-53b2-4d69-8028-8a4b480950e3',
              featureName: 'id',
              featureValue: '61',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0997be2d-cdf1-4afd-b097-cd69c5cec4e5',
              featureName: 'id',
              featureValue: '45',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ce8b4e53-e19f-4dd7-9ff6-1da480bf0068',
              featureName: 'title',
              featureValue: 'dynamic',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '840f72e0-bdaf-411e-8083-f0b257c303a5',
          risk: {
            id: '4',
            title:
              'Determining Flowline Corrosion Due to Accumulation of Sand (>150Micron Grain Size) During Shutdowns',
            description:
              'The acoustic sand detector can not detect sand finer than 150 micron.  These sand can settle during shutdown, form a cake on the pipe wall which requires a high velocity to remove.',
            cause: 'Pipe Corrosion',
            consequence: 'Integrity loss in a flowline',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '5',
              hardware: {
                id: '1',
                name: 'Acoustic sand detector',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '19',
                type: 'Hardware Failure',
                name: 'Unreliable readings',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '1',
              risk: {
                id: '4',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 1,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: '8b4494a4-da24-4ca6-917a-1b7080a8b2ac',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'c409cc5d-96fa-4099-a582-0ccfdbedfe0c',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '91dc7a46-e52c-44c1-8d1f-8e88d752ecd7',
              featureName: 'id',
              featureValue: '4',
              weight: 0.22,
              __typename: 'Contributor'
            },
            {
              id: '04dd1741-a6cd-4486-b208-a61562b43c2b',
              featureName: 'consequence',
              featureValue: 'integrity',
              weight: 0.16,
              __typename: 'Contributor'
            },
            {
              id: 'ec2d6425-2ee4-4255-b778-a6aad841c658',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: -0.15,
              __typename: 'Contributor'
            },
            {
              id: '0725a26b-beee-42f6-977c-46149ebd5880',
              featureName: 'cause',
              featureValue: 'pipe',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: 'b1f1a7a2-7749-4bbc-91e9-4505ba08a094',
              featureName: 'consequence',
              featureValue: 'loss',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: 'b8a47f20-02bf-4687-a690-96901a6bb6cc',
              featureName: 'description',
              featureValue: '.',
              weight: 0.06,
              __typename: 'Contributor'
            },
            {
              id: 'c834f846-4c69-4640-8aa5-c14bd68fb74a',
              featureName: 'cause',
              featureValue: 'corrosion',
              weight: 0.05,
              __typename: 'Contributor'
            },
            {
              id: '978ec4b6-4fd7-4442-8398-129b3ae5dd6b',
              featureName: 'title',
              featureValue: 'corrosion',
              weight: 0.04,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '9e801747-9304-469e-9458-3bdc88f103ce',
              featureName: 'title',
              featureValue: 'riser',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'bbfe2ac9-0411-4817-8c52-2fd0aa3815a3',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '284c7c80-6531-40a4-ba20-e814512cd35b',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '14fc0fef-05cf-4535-ac3e-b0b5d8894294',
              featureName: 'consequence',
              featureValue: 'containment',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '657895d1-18b7-48b9-b6a7-a0bbdbbb1ca4',
              featureName: 'id',
              featureValue: '32',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'dca607eb-4de3-44b9-94aa-ad83434e8059',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '98ecbd74-0c89-4410-aec9-02618b84b476',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '87260ae1-7ee4-4240-9c31-6aa1602eac97',
              featureName: 'id',
              featureValue: '61',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '813fb671-a0ee-4e8b-bb13-5d7c6c27e44a',
              featureName: 'id',
              featureValue: '45',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'd72f279d-f339-43f8-876f-0f8050cf0439',
              featureName: 'title',
              featureValue: 'dynamic',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '4618862e-03fc-4846-bc79-35e866686900',
          risk: {
            id: '10',
            title:
              'Terrain Induced Slugging and Low Production Rates in the ConvLoopLeg-02 and ConvLoopLeg-01  ',
            description:
              'The ConvLoopLeg-02 and ConvLoopLeg-01  gas lift risers are damaged and can not be used for stability control',
            cause: 'Slugging',
            consequence:
              'Instability in topsides, causing trips and loss of production',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '3',
            name: 'Gas Lift System',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '11',
              hardware: {
                id: '6',
                name: 'Gas lift riser',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '2',
                type: 'Hardware Failure',
                name: 'Damaged on installation',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '10',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.9176470588235295,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: '77cdb0ea-f4ed-42f7-b1d1-b8d1989416a7',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '943fae53-bc14-4ad7-9680-80911b1091f5',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'bbaae60e-e254-459c-af50-29e17e0946f1',
              featureName: 'cause',
              featureValue: 'slugging',
              weight: 0.26,
              __typename: 'Contributor'
            },
            {
              id: '668f5687-f2ad-4e07-8f90-de36ef7f0d41',
              featureName: 'id',
              featureValue: '10',
              weight: 0.19,
              __typename: 'Contributor'
            },
            {
              id: '8dfc9c09-0d93-451b-ba93-373d10f1926c',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '46c987f2-a3f8-494e-ae28-0e0362770dec',
              featureName: 'consequence',
              featureValue: 'topsides',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: 'faece78b-dd72-45c7-89bd-9e542b130b9c',
              featureName: 'consequence',
              featureValue: 'causing',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '9d79f125-36fb-4f5e-b8df-9de9f9d9815f',
              featureName: 'description',
              featureValue: 'lift',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '192afb94-24d2-4d40-9df3-6e8fc33b78b5',
              featureName: 'consequence',
              featureValue: 'instability',
              weight: 0.06,
              __typename: 'Contributor'
            },
            {
              id: '744a0010-e221-43d0-ad02-f46f3bbe90a7',
              featureName: 'consequence',
              featureValue: ' ',
              weight: -0.06,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '1af3a43f-e2a3-45a8-b205-6689a000a14c',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '3d976941-4092-43df-87e5-f8acb140ed16',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '7d2f97e5-6c5c-4b44-98fb-633c258280af',
              featureName: 'description',
              featureValue: '.',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '5390c7e8-e0e3-4d6a-95c7-4c8e9ff7c81e',
              featureName: 'title',
              featureValue: 'supply',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '89a100d6-c31c-4033-b98e-7fe0e275e1d5',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '2e6c30ee-f42a-430e-aacc-d7707152970d',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'dcf831a9-06ec-4c23-8322-60be3075ed31',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'be7f010a-aa42-42bf-b232-453d57c4bee9',
              featureName: 'title',
              featureValue: 'umbilical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '95dc5898-fa22-442a-a135-253af0861bec',
              featureName: 'title',
              featureValue: 'scope',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '989c2a77-32ac-4a15-9266-a357b7cc98e1',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '1910c720-b4f1-42d3-b312-f136e3023da2',
          risk: {
            id: '11',
            title:
              'Inefficient Chemical Injection Delivery (Scale, and Corrosion)',
            description:
              'Operations has observed a vacuum in the corrosion and scale inhibitor injection.  The dilution system was the planned solution on the system however the inhibitors supplied are not meant to be diluted at the required dilution ratios of 1-10 inhibitor to 50-100 dilution water.',
            cause:
              'Chosen design philosophy of using dilution system not implemented.',
            consequence:
              'Increase in OPEX costs due to excessive chemical usage.',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '1',
            name: 'Chemical Injection System',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '12',
              hardware: {
                id: '3',
                name: 'Chemical injection system',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '6',
                type: 'Hardware Failure',
                name: 'Inadequate design',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '2',
              risk: {
                id: '11',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.9411764705882354,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: '352386bb-e7b3-4a48-928c-2e84bfbd4a82',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'c6d3e2c6-8659-4245-9893-f00cb8ee8029',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'f2704af3-7a5a-43f8-91f1-8276be5a6055',
              featureName: 'id',
              featureValue: '11',
              weight: 0.2,
              __typename: 'Contributor'
            },
            {
              id: '57bb11a5-ed4d-4135-bc89-63283c2fd101',
              featureName: 'title',
              featureValue: 'injection',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: '8ed1521c-3ef9-43da-89b8-f486a6de9774',
              featureName: 'title',
              featureValue: 'scale',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: 'd094c008-8f74-4c94-8386-0ed5351c9227',
              featureName: 'consequence',
              featureValue: 'chemical',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '7b17df9c-4158-474f-b4f1-d3cb308abec9',
              featureName: 'title',
              featureValue: 'delivery',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: 'e309e3c2-11d2-4de8-9786-bb83f877d66d',
              featureName: 'consequence',
              featureValue: 'opex',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '966cc9ce-6165-4c34-88d4-6d025b7f8e2f',
              featureName: 'description',
              featureValue: '.',
              weight: 0.06,
              __typename: 'Contributor'
            },
            {
              id: '9a240222-ab69-456d-884b-fc143385b71d',
              featureName: 'title',
              featureValue: 'corrosion',
              weight: 0.05,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '9d188bdf-0955-480f-88ca-1e16c422425e',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ebc9814f-b021-4ccc-92da-078f2bf12c42',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0525e71f-aafa-49d6-b1c8-1934d5274ac4',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '89c71b05-2050-4a35-be06-e9ae887510c1',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '16c42489-b6ba-4d84-abb0-ada2b1a0a3fb',
              featureName: 'id',
              featureValue: '177',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '323adc4a-5f69-49be-b363-764aa714c17f',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '6c2e60e3-c3a5-4818-a244-7340a55cc66b',
              featureName: 'id',
              featureValue: '176',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '7c7152e0-5b51-4746-ba03-f10bc50e8723',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '5abef0c7-20ab-46f6-a69d-30784cd4bad9',
              featureName: 'id',
              featureValue: '183',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '60c7ab8c-752b-4b35-9b90-faf890565cab',
              featureName: 'id',
              featureValue: '185',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '1c3edbe0-3f43-4a0c-9ea6-c7f4d027b0a5',
          risk: {
            id: '12',
            title: 'MeOH injection limitations',
            description:
              'Currently have blockages at MIV valves across the field and rate restrictions in methanol cores',
            cause: 'Water ingress',
            consequence: 'Hydrate blockage in cores',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '1',
            name: 'Chemical Injection System',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '13',
              hardware: {
                id: '9',
                name: 'Methanol injection valves',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '1',
                type: 'Hardware Failure',
                name: 'Blocked by hydrates',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '3',
              risk: {
                id: '12',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.9941176470588236,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: 'e7ead469-4f4d-4460-a422-b9e2e3bab705',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '8c15eafd-259e-4cd6-afd3-ce48cbfeaf77',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'ff99a29d-3ecc-4696-81b5-a96206b5c407',
              featureName: 'id',
              featureValue: '12',
              weight: 0.21,
              __typename: 'Contributor'
            },
            {
              id: '1a0de74e-b35b-469d-a3ad-e198c09b3ed7',
              featureName: 'title',
              featureValue: 'injection',
              weight: 0.15,
              __typename: 'Contributor'
            },
            {
              id: '3e267aa8-04ec-456e-8b45-4925b887442f',
              featureName: 'consequence',
              featureValue: 'cores',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '6d82cfea-7e37-49f5-9971-94a7ea7f3b21',
              featureName: 'cause',
              featureValue: 'water',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: '4fcf4ba1-3f9f-4051-b947-b3d83a24445e',
              featureName: 'cause',
              featureValue: 'ingress',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: 'da4a46a1-ed61-48e4-be78-ef04f447847f',
              featureName: 'title',
              featureValue: 'limitations',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '99183018-9906-4e1d-b277-120b80201d44',
              featureName: 'title',
              featureValue: 'meoh',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: 'a9121f2f-4478-4df5-a0fa-329338fa4877',
              featureName: 'consequence',
              featureValue: 'blockage',
              weight: 0.07,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '83e22d26-28e3-4f93-9233-1735d4149aeb',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '2d893440-dace-463c-ba6b-02bfa166479e',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '9be56bcd-d4e4-4b7c-8451-a6124e6cd380',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '32d10cae-429a-4307-8823-3cd872909720',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '1cd5eb14-993f-4be6-9eaf-2df0c826e37a',
              featureName: 'id',
              featureValue: '177',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'e9da8a07-d52c-416a-9195-50b527af1675',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ba8450ca-efd3-4984-9929-adf96f21534a',
              featureName: 'id',
              featureValue: '176',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '4300b0e0-59ef-4022-ad33-b3e4c2f9feaa',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'd1729554-2be4-43e5-99e7-9b74a3991735',
              featureName: 'id',
              featureValue: '183',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '1bdf459b-863a-4c99-a587-a294a4e236ad',
              featureName: 'id',
              featureValue: '185',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '13a4477a-eab8-4b44-9a7d-c8ac4c57463f',
          risk: {
            id: '13',
            title: 'Slugging due to Drilling Program',
            description:
              'Throughout field life producers will have to be shut-in so that the reservoir pressure does not fall below the safe drilling pressure.  This was not communicated in the design phase. Lost of key production from a manifold can cause flowline instability.',
            cause: 'Slugging',
            consequence:
              'Instability in topsides, causing trips and loss of production',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '14',
              hardware: {
                id: '4',
                name: 'Flowline',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '17',
                type: 'Hardware Failure',
                name: 'Slugging',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '13',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.9411764705882354,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: 'ada8c7db-26e6-4109-9e45-76895e60a232',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '9badd6aa-1d92-4dc7-9572-5b4d4501cde3',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '736a0f34-f437-4ea0-9a01-331868da171b',
              featureName: 'cause',
              featureValue: 'slugging',
              weight: 0.26,
              __typename: 'Contributor'
            },
            {
              id: '4a4f7c69-a59e-455a-bba4-a3d5fe4b0d6e',
              featureName: 'id',
              featureValue: '13',
              weight: 0.2,
              __typename: 'Contributor'
            },
            {
              id: '321d09f0-ad98-47bc-8a4b-6464cc2c9254',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: 'e68bf335-bf36-45be-a722-172364dd35d1',
              featureName: 'consequence',
              featureValue: 'topsides',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: 'ad05545d-c515-4b72-8d53-d1c3974bcfe9',
              featureName: 'description',
              featureValue: '.',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '179ad0d2-1037-4fee-8e9f-5bc0b6fed69c',
              featureName: 'consequence',
              featureValue: 'causing',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: 'a942bad9-fc50-4f66-a5c0-0f7848973c35',
              featureName: 'title',
              featureValue: 'drilling',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: 'df7e1181-6550-43b6-8517-7d10df814d48',
              featureName: 'title',
              featureValue: 'program',
              weight: 0.07,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: 'bacb321f-788f-4dfe-82d8-0519b5fd19b1',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'b73e06fd-2222-4378-b824-303d0c901854',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'aa1ffefe-f208-4376-9916-d9bce71a5117',
              featureName: 'title',
              featureValue: 'supply',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'e93c1c39-db93-4a11-ad25-16f40eb7e1fe',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'a1191d15-67d2-44c2-ae30-911a41895a15',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'c849fe32-d48a-4bbf-910f-d1aa37425f39',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'cdca0a87-ce94-4fc4-bb80-044ad4041bd6',
              featureName: 'title',
              featureValue: 'umbilical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '455dc065-a934-4067-82ea-68241eeab22a',
              featureName: 'title',
              featureValue: 'scope',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'f95ec103-5378-42ea-a61d-11a219733054',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'e771ee2e-0763-49bb-9ff6-040fb0e59cc9',
              featureName: 'cause',
              featureValue: 'opc',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '541909d9-0873-4976-b3ab-307bfa0292f4',
          risk: {
            id: '17',
            title: 'Operation pigging',
            description: 'Unable to find chemical to treat crude',
            cause: 'Unable to find chemical to treat crude for use for ILI',
            consequence:
              'Unable to Operationally pig the Subsea Hybrid Loop unless the SHL production is offline. Loss of production.',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [],
          processFailures: [
            {
              id: '2',
              process: {
                id: '2',
                __typename: 'Process'
              },
              possibleFailure: {
                id: '11',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '2',
              risk: {
                id: '17',
                __typename: 'Risk'
              },
              __typename: 'ProcessFailure'
            }
          ],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.9705882352941176,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: '6b1d94ec-5b6c-47ad-8b76-d186416bfd29',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '66bef2ca-a39b-443a-99e2-4f6d73ad8d7d',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '48fbe244-c79d-40d3-8328-ce202487f7e0',
              featureName: 'id',
              featureValue: '17',
              weight: 0.21,
              __typename: 'Contributor'
            },
            {
              id: '5441e8b4-e699-4241-82cd-2305d17298d6',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '142311cd-4990-4709-bc9b-0a47ee92e461',
              featureName: 'title',
              featureValue: 'operation',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '31cfe647-9474-44b1-a9b5-69d61cdab8d0',
              featureName: 'title',
              featureValue: 'pigging',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '4958d4ba-b722-4400-b42e-778385c73291',
              featureName: 'description',
              featureValue: 'chemical',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '057b84c4-f37d-4170-9df3-095eae037455',
              featureName: 'description',
              featureValue: 'treat',
              weight: 0.06,
              __typename: 'Contributor'
            },
            {
              id: '3073abdb-9d66-42eb-9090-299113567f51',
              featureName: 'description',
              featureValue: 'crude',
              weight: 0.06,
              __typename: 'Contributor'
            },
            {
              id: '8bfb46d1-f87f-4d99-85b8-8e474d1d170f',
              featureName: 'consequence',
              featureValue: 'pig',
              weight: 0.05,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '13c6d1c4-1e69-49d8-8807-cb1cf0c2cca5',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '1add98c5-b888-4cad-aebc-1046f5f6022b',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '4fd4f5c9-8a57-4135-a3e1-877b00a8bc2b',
              featureName: 'description',
              featureValue: '.',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '5e6dc4b0-6cb7-4494-b9dc-b339ef205233',
              featureName: 'title',
              featureValue: 'supply',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0b6f8fdf-ac68-4bda-b184-314d76c62761',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '8cdc7016-0847-4b1f-bba9-9f2370d20daa',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'f5301633-d9ac-487f-a736-bc3cdd8c28c5',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '5a53b9f3-fb8f-4957-80ef-6e9719db31ac',
              featureName: 'title',
              featureValue: 'umbilical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'a4c0b867-4d54-4fee-aed0-5a320ba3bb59',
              featureName: 'title',
              featureValue: 'scope',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '07fde2d1-799d-4733-bd03-f01bcf922a23',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: 'acb33bd0-e100-481d-b392-e39db245233b',
          risk: {
            id: '20',
            title:
              'Hydrate blockage due to low HV methanol injection on restart',
            description:
              'Historic data shown that below design methanol rates (6m3/h) is injected into wells during restart.\nBelow design rate not widely communicated and hence restart procedures does not take the lower rate into account, resulting in under dosing of methanol. Unreliable methanol flow meter data at low rates.',
            cause: 'Under dosing of methanol during restart',
            consequence: 'hydrate being formed, potentially causing blockage',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '15',
              hardware: {
                id: '8',
                name: 'Methanol injection system',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '18',
                type: 'Hardware Failure',
                name: 'Under-designed',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '1',
              risk: {
                id: '20',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            },
            {
              id: '16',
              hardware: {
                id: '4',
                name: 'Flowline',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '5',
                type: 'Hardware Failure',
                name: 'Hydrate blockage',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '20',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '1',
          confidenceLevel: 0.9823529411764705,
          lowConfidence: false,
          score: 0.2222222222222222,
          contributors: [
            {
              id: '81f19dcb-4a34-48a2-9fff-69ee5e13f83c',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: '8e3aa0a1-85b8-4855-ad20-bf0e196be417',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.41,
              __typename: 'Contributor'
            },
            {
              id: 'a96d2ae3-84ef-48ab-8d41-56c499d2ddbb',
              featureName: 'id',
              featureValue: '20',
              weight: 0.22,
              __typename: 'Contributor'
            },
            {
              id: '3ccfaeec-aa5d-4092-82f2-8ae5343f08b0',
              featureName: 'title',
              featureValue: 'injection',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '47673760-6eca-4b84-976c-1a966b5e7961',
              featureName: 'consequence',
              featureValue: 'potentially',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: '349e9f13-04fe-425a-b482-c680d9bd2d29',
              featureName: 'cause',
              featureValue: 'dosing',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: 'd4bd8e89-6a0a-4406-afeb-2ed62956653d',
              featureName: 'consequence',
              featureValue: 'causing',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '71152675-643b-456e-80d2-37126519630f',
              featureName: 'title',
              featureValue: 'low',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: 'fa93e650-90f1-4d10-a34f-48518e98d174',
              featureName: 'consequence',
              featureValue: 'formed',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: '841bbba3-1ff1-4263-b49a-14a0e734d4ea',
              featureName: 'description',
              featureValue: '.',
              weight: 0.06,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '78070975-0c40-483e-acd9-3d59f29b1321',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ebece66a-1752-40e1-8e39-69e07d6bcece',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'db31a0a2-bbd2-43ab-b812-3b0f1a45f9e8',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ccf1b173-86f1-47d8-91ec-f6130c4f6ce2',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '35b84c81-ec04-4161-82b2-11469fe47fe1',
              featureName: 'id',
              featureValue: '177',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ed718fe6-3dd5-459b-8752-a41d0865ad15',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '189a37ea-340c-419d-87cd-c6f18abc1cc5',
              featureName: 'id',
              featureValue: '176',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '391390a5-78a4-4054-bd09-cf25b492831a',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'b57e07f9-4b24-4e5c-80b6-2a27e1fe3ba1',
              featureName: 'id',
              featureValue: '183',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '9088d79b-767c-4df0-a849-8fa204793c97',
              featureName: 'id',
              featureValue: '185',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        }
      ],
      __typename: 'RiskBucket'
    },
    {
      id: 'cb169e47-1c2c-4180-b6e2-4fe5422d972b',
      severity: '2',
      likelihood: '2',
      numberOfRisks: 3,
      numberOfLowConfidenceRisks: 0,
      averageConfidenceLevel: 0.892156862745098,
      risks: [
        {
          id: '9a0a125e-0bd3-4c3f-b7d5-12348bd069a9',
          risk: {
            id: '6',
            title:
              'Hydrate formation in a well. Due to SCM Failure on a Wet Producer',
            description:
              'If the tree SCM fails on a wet producer, MeOH can not be delivered to the well and its jumper',
            cause: 'Hydrate blockage due to Failure of wet producer tree SCM',
            consequence: 'Loss of production from a well',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '6',
            name: 'Subsea Proudction System',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '7',
              hardware: {
                id: '11',
                name: 'Subsea control module',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '4',
                type: 'Hardware Failure',
                name: 'Failure / Unusable',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '2',
              risk: {
                id: '6',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '2',
          confidenceLevel: 0.8941176470588236,
          lowConfidence: false,
          score: 0.4444444444444444,
          contributors: [
            {
              id: '53e1b9c1-f089-4dc5-b584-de2e9e24d3e4',
              featureName: 'id',
              featureValue: '6',
              weight: 0.38,
              __typename: 'Contributor'
            },
            {
              id: '0c1420be-01fb-4db1-932a-67f972817ba7',
              featureName: 'consequence',
              featureValue: 'loss',
              weight: -0.17,
              __typename: 'Contributor'
            },
            {
              id: '9e54a5a4-aec8-44e6-93be-94a050e2470a',
              featureName: 'consequence',
              featureValue: 'production',
              weight: -0.15,
              __typename: 'Contributor'
            },
            {
              id: '269fa51e-48e7-4410-bf08-345f53cfc8e2',
              featureName: 'cause',
              featureValue: 'scm',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '319cd4cf-20a4-4924-b1cd-fc04505b54cc',
              featureName: 'description',
              featureValue: 'delivered',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: 'f600a8e6-0e17-4a7f-873b-aa69f4005bf8',
              featureName: 'description',
              featureValue: 'scm',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: '762f4ad2-c2c0-433d-81a0-97d54793d5ab',
              featureName: 'cause',
              featureValue: 'producer',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '91b295f9-576c-4905-b410-5913e7b1bcc8',
              featureName: 'cause',
              featureValue: 'wet',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: 'c165cb05-914b-452f-b4fa-a517cd8911ac',
              featureName: 'title',
              featureValue: 'producer',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '50c38e42-9084-4e1c-b96d-599668b04c39',
              featureName: 'title',
              featureValue: 'wet',
              weight: 0.08,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: 'eaa3012a-591e-48c2-957f-89a7dc1cd994',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '11d500d5-7436-414b-9036-25403d84be95',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '3edbf78c-7eea-438b-b396-3dee8917c3be',
              featureName: 'description',
              featureValue: '.',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '3650cfa0-6c5d-4d50-94aa-6a2073f82460',
              featureName: 'title',
              featureValue: 'supply',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '247be7e9-160f-4ff9-9e7a-d567d29dae7e',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '906f64d5-30ad-4862-b6e1-4b868c1213d3',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'b70c0f3d-8b2d-4adc-af20-e6958eb8a03e',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '95ec3071-94a4-449d-9748-b1909749a2d8',
              featureName: 'title',
              featureValue: 'umbilical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '70274d59-041a-4e43-9070-bf288a888704',
              featureName: 'title',
              featureValue: 'scope',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'd877c34b-3474-4c74-9f58-54ee49dd9921',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: 'fc8fabd7-a647-4833-9963-e2a730acb8b4',
          risk: {
            id: '7',
            title: 'Hydrate blockage in small bore locations.',
            description: 'Vacuum skid has not been delivered to asset',
            cause: 'Produced water can cause hydrate blockage in small bore',
            consequence: 'Loss of production at a well or manifold',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '6',
            name: 'Subsea Proudction System',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '8',
              hardware: {
                id: '13',
                name: 'Vacuum skid',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '12',
                type: 'Hardware Failure',
                name: 'Not delivered',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '3',
              risk: {
                id: '7',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '2',
          confidenceLevel: 0.8941176470588236,
          lowConfidence: false,
          score: 0.4444444444444444,
          contributors: [
            {
              id: '2edc7ae8-8028-4a4f-8c5a-319896fbda39',
              featureName: 'id',
              featureValue: '7',
              weight: 0.36,
              __typename: 'Contributor'
            },
            {
              id: '57377df1-f273-4b0d-9c11-c839fe278180',
              featureName: 'description',
              featureValue: 'delivered',
              weight: 0.15,
              __typename: 'Contributor'
            },
            {
              id: 'bac1d05e-25bc-47fd-b54e-11bdc08225b1',
              featureName: 'consequence',
              featureValue: 'manifold',
              weight: 0.12,
              __typename: 'Contributor'
            },
            {
              id: '349367d2-c8da-4971-9257-5a7b1880f4d2',
              featureName: 'consequence',
              featureValue: 'loss',
              weight: -0.1,
              __typename: 'Contributor'
            },
            {
              id: '43c17700-e80f-4a67-a5bb-f8b9b91914d0',
              featureName: 'description',
              featureValue: 'asset',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: 'eb6fb765-55d6-4f2f-9489-36eb7762220f',
              featureName: 'description',
              featureValue: 'skid',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: 'bbd4221b-e21a-4208-a4ca-bef30be38ae1',
              featureName: 'consequence',
              featureValue: 'production',
              weight: -0.09,
              __typename: 'Contributor'
            },
            {
              id: '6b2dd939-871d-4f78-a816-cec464325456',
              featureName: 'title',
              featureValue: 'locations',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '2421e0fa-15c5-40cc-8da2-192ec4c7ce64',
              featureName: 'title',
              featureValue: '.',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '776c2ea3-a9e2-4d45-a1fd-de67fb83945b',
              featureName: 'description',
              featureValue: 'vacuum',
              weight: 0.08,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '477ba2dc-7758-457e-a206-82809bce095f',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'e68043f3-b2d2-4229-9167-72cca5669649',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '63c166ad-e134-4567-89c8-7201b311b1cf',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'e9af6d53-d3c8-4434-bca9-ec0d624ed58f',
              featureName: 'id',
              featureValue: '177',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '025fbdb1-6334-4df4-b1b5-80728f06a039',
              featureName: 'description',
              featureValue: '.',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'aa9ebf56-6921-473f-8f84-0e4dfd4fd9af',
              featureName: 'title',
              featureValue: ' ',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '96e57281-ffb1-4bc3-bf26-598f706e561e',
              featureName: 'description',
              featureValue: 'cost',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '551f62dd-b44d-4b0f-b9e4-f83686e131b9',
              featureName: 'id',
              featureValue: '179',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '75a06eab-b482-45f3-a1dc-88b44903cba3',
              featureName: 'id',
              featureValue: '176',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'b40a5208-f7ab-47bb-a68a-2a0d99533b45',
              featureName: 'id',
              featureValue: '178',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '24e77592-2b5b-49e4-b13e-fa00523b2f2a',
          risk: {
            id: '18',
            title: 'Failed ILI campaigned',
            description: 'Personnel and correct equipment not ready',
            cause:
              'Original Planning of ILI did not include Process System/Flow Assurance in scope',
            consequence:
              'Late additions not included in ILI campaign. Causing delays in campaign.',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [],
          processFailures: [
            {
              id: '3',
              process: {
                id: '3',
                __typename: 'Process'
              },
              possibleFailure: {
                id: '7',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '3',
              risk: {
                id: '18',
                __typename: 'Risk'
              },
              __typename: 'ProcessFailure'
            }
          ],
          peopleFailures: [
            {
              id: '3',
              role: {
                id: '3',
                __typename: 'Role'
              },
              possibleFailure: {
                id: '10',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '3',
              risk: {
                id: '18',
                __typename: 'Risk'
              },
              __typename: 'PeopleFailure'
            }
          ],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '2',
          confidenceLevel: 0.8882352941176471,
          lowConfidence: false,
          score: 0.4444444444444444,
          contributors: [
            {
              id: 'd5e795b5-3960-4da9-bfce-1a0894bfd3e9',
              featureName: 'id',
              featureValue: '18',
              weight: 0.33,
              __typename: 'Contributor'
            },
            {
              id: 'c767905a-3f94-408b-93ec-2d99cbbe196d',
              featureName: 'description',
              featureValue: 'personnel',
              weight: 0.12,
              __typename: 'Contributor'
            },
            {
              id: '3472fce1-f78e-4942-9d3f-747b09f34f73',
              featureName: 'title',
              featureValue: 'campaigned',
              weight: 0.12,
              __typename: 'Contributor'
            },
            {
              id: 'c9ef8931-53c4-4aea-9ddf-cbce64cf6709',
              featureName: 'title',
              featureValue: 'failed',
              weight: 0.12,
              __typename: 'Contributor'
            },
            {
              id: 'd123a4ae-db88-4aad-8a61-c7d97d03776f',
              featureName: 'description',
              featureValue: 'correct',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: '105965e4-3eb4-4c1b-95a7-2f3934695994',
              featureName: 'description',
              featureValue: 'ready',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: 'a8d9336e-4859-421d-934a-e1f5e42a9406',
              featureName: 'consequence',
              featureValue: 'campaign',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: 'b2694429-c197-409f-8337-7ccc647d9b22',
              featureName: 'title',
              featureValue: 'ili',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '23ce64be-4b06-45c3-b966-d02d6c314261',
              featureName: 'consequence',
              featureValue: '.',
              weight: -0.06,
              __typename: 'Contributor'
            },
            {
              id: 'ddd16c88-d4df-4e9e-8d9e-cd86f8b04341',
              featureName: 'consequence',
              featureValue: 'additions',
              weight: 0.04,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '729367f7-a69d-4c37-a217-94f2fd808ca6',
              featureName: 'discipline.id',
              featureValue: '6',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '428baf0a-cba0-4f04-83e8-15b2370c75bf',
              featureName: 'discipline.name',
              featureValue: 'Execution',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'd06bfff7-b258-475b-971c-528f392e408e',
              featureName: 'description',
              featureValue: '.',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '1bbaa29d-a327-40fa-9c77-c8586d82cc45',
              featureName: 'title',
              featureValue: 'supply',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '39cc8821-5c1b-4013-b146-fcf2b96ab875',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'c3dca396-1cb6-48a1-9b78-6319e65f980c',
              featureName: 'title',
              featureValue: 'integrity',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'f49f9870-f765-4091-93c3-db4d2802ec7b',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'd92dbd1c-1ef2-4cdb-bab7-288e72e83665',
              featureName: 'title',
              featureValue: 'umbilical',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'b495ebb1-ed0f-4099-a78f-5172ebd6f4aa',
              featureName: 'title',
              featureValue: 'scope',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '09570a8f-9322-4f28-8b9a-9f525867fb50',
              featureName: 'title',
              featureValue: 'technical',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        }
      ],
      __typename: 'RiskBucket'
    },
    {
      id: '7c2709ff-8a90-48a2-97ca-cdd1008553da',
      severity: '2',
      likelihood: '3',
      numberOfRisks: 4,
      numberOfLowConfidenceRisks: 3,
      averageConfidenceLevel: 0.7941176470588236,
      risks: [
        {
          id: '9d1e2893-572f-4664-a4a7-d7be98a68bab',
          risk: {
            id: '5',
            title:
              'Hydrate formation in SPS/flowline. Due to Seawater Ingress at a Hub',
            description:
              'Seawater ingress at well hubs on the manifolds is a risk at each of the future well slots',
            cause:
              'Hydrate blockage due to Seawater ingress at manifold well hub',
            consequence: 'Loss of production at a flowline',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '6',
            name: 'Subsea Proudction System',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '6',
              hardware: {
                id: '7',
                name: 'Manifold well hub',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '16',
                type: 'Hardware Failure',
                name: 'Seawater ingress',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '5',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '3',
          confidenceLevel: 0.7941176470588236,
          lowConfidence: true,
          score: 0.6666666666666666,
          contributors: [
            {
              id: 'e256b144-bf4e-497e-a241-2fb3c0b88970',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 0.5,
              __typename: 'Contributor'
            },
            {
              id: 'df80f704-5d78-40f2-8141-d9fa95d85c84',
              featureName: 'id',
              featureValue: '5',
              weight: 0.44,
              __typename: 'Contributor'
            },
            {
              id: '0ecab336-faf7-47c5-addc-31864c00be2a',
              featureName: 'consequence',
              featureValue: 'production',
              weight: -0.17,
              __typename: 'Contributor'
            },
            {
              id: 'cb95daa2-2dec-403f-bff7-e9d1d5d9b240',
              featureName: 'title',
              featureValue: 'sps/flowline',
              weight: 0.12,
              __typename: 'Contributor'
            },
            {
              id: 'b18b7ca5-8449-45fd-9448-ec2c6fb02a3e',
              featureName: 'cause',
              featureValue: 'blockage',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '81c46f3a-242e-4022-a83b-c6b9c6271f38',
              featureName: 'consequence',
              featureValue: 'loss',
              weight: -0.11,
              __typename: 'Contributor'
            },
            {
              id: 'eb08c31f-7746-4297-af0c-59a464c4afeb',
              featureName: 'cause',
              featureValue: 'hydrate',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: 'a7b9678b-5398-41ec-a3f8-c225351772d1',
              featureName: 'title',
              featureValue: 'hydrate',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: '0ef609d1-37fb-4233-b44c-2e737724bec8',
              featureName: 'title',
              featureValue: 'formation',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: '28f0eb34-e620-4a6b-b333-58ffb644a160',
              featureName: 'title',
              featureValue: '.',
              weight: 0.09,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: 'bf46552a-e4c0-4bdd-9cf0-6e4750b080a0',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'de098baf-16e3-49ad-9704-785ddd5af8cc',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '2dba1cb1-24ad-467d-9e77-832c009f42cb',
              featureName: 'id',
              featureValue: '177',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'c71af955-098d-4a38-93b0-f82f19ce732d',
              featureName: 'description',
              featureValue: '.',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '7083871c-7eb5-44b3-b5b7-ef869c90e448',
              featureName: 'title',
              featureValue: ' ',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'edf248d0-8f58-4b08-8056-ffcbec9f0534',
              featureName: 'description',
              featureValue: 'cost',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '9939722c-38f4-4839-9ccb-787320d67cdf',
              featureName: 'id',
              featureValue: '179',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'febc9263-1530-4468-bc98-ec54888e0fb8',
              featureName: 'id',
              featureValue: '176',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'b445b2df-0819-4c89-bf47-43b77a2235af',
              featureName: 'id',
              featureValue: '178',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '1d5c2b8b-0128-48d4-816e-e2f921f595cd',
              featureName: 'id',
              featureValue: '183',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '4c45711f-a399-4de1-a638-12f32f75bcbc',
          risk: {
            id: '8',
            title: 'Hydrate blockage in large bore.',
            description: 'Flowline intervention capability still not possible.',
            cause:
              'Untreated live production fluid can cause hydrate blockage in large bore when it goes into the hydrate envelop in a shutdown',
            consequence: 'Loss of production at a flowline',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '9',
              hardware: {
                id: '4',
                name: 'Flowline',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '9',
                type: 'Hardware Failure',
                name: 'No intervention possible',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '8',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '3',
          confidenceLevel: 0.7823529411764707,
          lowConfidence: true,
          score: 0.6666666666666666,
          contributors: [
            {
              id: '356c78d9-86a8-4986-9071-a34d15594139',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 0.5,
              __typename: 'Contributor'
            },
            {
              id: '854d70d6-e0bd-42a6-a930-e44b9e4192af',
              featureName: 'id',
              featureValue: '8',
              weight: 0.43,
              __typename: 'Contributor'
            },
            {
              id: 'f0b05108-555c-4494-a32f-9e0bde8073ad',
              featureName: 'description',
              featureValue: 'intervention',
              weight: 0.19,
              __typename: 'Contributor'
            },
            {
              id: '659863fd-54c5-4b0c-8c0d-002c4be26336',
              featureName: 'consequence',
              featureValue: 'production',
              weight: -0.17,
              __typename: 'Contributor'
            },
            {
              id: 'dad849f8-5759-4a7c-ab96-4f9d2c8e1386',
              featureName: 'title',
              featureValue: 'large',
              weight: 0.12,
              __typename: 'Contributor'
            },
            {
              id: '4a48d432-aa4f-42c4-a06c-b537304d24a7',
              featureName: 'title',
              featureValue: 'hydrate',
              weight: 0.12,
              __typename: 'Contributor'
            },
            {
              id: '39c3e579-cd1a-4893-a189-441644b27122',
              featureName: 'description',
              featureValue: 'capability',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: 'd1351d6d-2f16-4318-8d3f-a10249576043',
              featureName: 'description',
              featureValue: 'possible',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '18af915f-e8f8-4204-a179-917cda93a80c',
              featureName: 'cause',
              featureValue: 'hydrate',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: 'e8ff5f64-ee38-411a-81ca-33d420583349',
              featureName: 'title',
              featureValue: '.',
              weight: 0.11,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '680ee664-ec57-4111-9667-3e169ed139b5',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'f7a6c4e8-0e85-4195-aea3-d06281c4af25',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '6afe31d5-3f8c-4469-a28b-02f7d6edfc3b',
              featureName: 'id',
              featureValue: '177',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0a7c58aa-7fdb-4289-bfee-e63731fd4c1c',
              featureName: 'title',
              featureValue: ' ',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'a128ea36-b22f-4d24-9d3a-4603a9adc6f6',
              featureName: 'description',
              featureValue: 'cost',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'f39142d5-4104-40af-905f-815e234b0f43',
              featureName: 'id',
              featureValue: '179',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'f0c951ca-aed5-458f-bc7d-506a1f30f153',
              featureName: 'id',
              featureValue: '176',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '8281ab87-cba3-4775-a1c5-de2996390ea1',
              featureName: 'id',
              featureValue: '178',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'ab466ea8-7e5f-4767-a927-6ed16ffaaf14',
              featureName: 'id',
              featureValue: '183',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '377d1649-18f5-4048-b3c4-68580583ca80',
              featureName: 'title',
              featureValue: 'scope',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: 'a3fa2244-9558-448c-97bc-bcfa7044a527',
          risk: {
            id: '9',
            title:
              'Hydrate blockage in Service line due to methanol barrier unavailable',
            description:
              'The barrier MeOH system in the Subsea Hybrid Loop is there to maintain pressure between the two BVH4 and BVH5 valves.  If pressure is not maintained the valves can unseat and allow production fluids to migrate into the service. System not commissioned',
            cause:
              'Leakage of live fluid into un-insulated service line.\nBarrier pressure system not yet commissioned.',
            consequence:
              'Hydrate blockage. Loss of ability to conduct a Subsea Hybrid Loop displacement operation. Loss of service line.',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [
            {
              id: '10',
              hardware: {
                id: '2',
                name: 'Barrier MeOH system',
                description: '',
                __typename: 'Hardware'
              },
              possibleFailure: {
                id: '8',
                type: 'Hardware Failure',
                name: 'Loss of integrity',
                description: '',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '1',
              risk: {
                id: '9',
                __typename: 'Risk'
              },
              __typename: 'HardwareFailure'
            }
          ],
          processFailures: [],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '3',
          confidenceLevel: 0.8058823529411766,
          lowConfidence: false,
          score: 0.6666666666666666,
          contributors: [
            {
              id: '2381a59d-a92b-47ad-8d5e-1a21aaa928ba',
              featureName: 'id',
              featureValue: '9',
              weight: 0.47,
              __typename: 'Contributor'
            },
            {
              id: 'a8ad8729-d88a-4fdf-9da0-1c3282ba0f80',
              featureName: 'title',
              featureValue: 'methanol',
              weight: 0.12,
              __typename: 'Contributor'
            },
            {
              id: 'a466837f-dec8-483a-be9c-7ae15057afcc',
              featureName: 'title',
              featureValue: 'hydrate',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: 'c8224cf3-eb84-4ad8-bb42-f6c9f7aaa91c',
              featureName: 'title',
              featureValue: 'blockage',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: 'dcaf467e-d23c-437b-a371-63b940dce76e',
              featureName: 'title',
              featureValue: 'barrier',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: '7c9ae50d-df53-4b42-af30-e270a463ca9d',
              featureName: 'title',
              featureValue: 'unavailable',
              weight: 0.09,
              __typename: 'Contributor'
            },
            {
              id: '5901de43-5e7e-4dac-a0ff-ca7a7c496b5e',
              featureName: 'cause',
              featureValue: 'live',
              weight: 0.07,
              __typename: 'Contributor'
            },
            {
              id: 'a34bb25d-e049-4903-af51-f8c86ba7698d',
              featureName: 'consequence',
              featureValue: 'hydrate',
              weight: 0.06,
              __typename: 'Contributor'
            },
            {
              id: '5fa81c6a-d17f-4201-a927-947ee6a2e1dc',
              featureName: 'cause',
              featureValue: 'barrier',
              weight: 0.06,
              __typename: 'Contributor'
            },
            {
              id: '45588f01-51cc-446f-92eb-7f74950cdbc9',
              featureName: 'cause',
              featureValue: 'commissioned',
              weight: 0.06,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '0267d3a8-2eb1-4d79-95dd-76372f6ea958',
              featureName: 'consequence',
              featureValue: 'containment',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'c4b7fb88-1e4f-43fe-8578-a0d4b11f3f49',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'de6bb054-3462-467b-829e-8e363f7818fa',
              featureName: 'id',
              featureValue: '177',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '317a0fff-72de-46fd-a957-445218d7c168',
              featureName: 'id',
              featureValue: '176',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'd0156ca2-c433-4cd1-8967-a2a9defa6c4a',
              featureName: 'consequence',
              featureValue: 'corrosion',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0297f9ea-5ca1-4e64-8e12-54d1444093a3',
              featureName: 'cause',
              featureValue: 'lack',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '052cb492-03fe-4527-8b14-3cdad0f798e3',
              featureName: 'id',
              featureValue: '32',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'c3304c8e-412e-4e9c-a698-0b80396a1c79',
              featureName: 'title',
              featureValue: 'corrosion',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '4d356819-c25c-44ff-8d68-e2c8bcd774a0',
              featureName: 'title',
              featureValue: 'riser',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0ec30ba1-a7be-4276-905a-5612c3e2b65b',
              featureName: 'cause',
              featureValue: 'corrosion',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '0a08ab28-599a-47a5-820a-fa5238e8b978',
          risk: {
            id: '16',
            title: 'New wells operating strategy',
            description:
              'New wells project does not have an operating strategy for long off-set wells.\nNo FA resource in new wells team to adequately scope out work',
            cause: 'Lack of operating strategy',
            consequence:
              'Delays in well start-up / hydrate of the well / unacceptable MeOH contamination of crude / devaluation of crude',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '7',
            name: 'Subsurface Facilities',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [],
          processFailures: [
            {
              id: '1',
              process: {
                id: '1',
                __typename: 'Process'
              },
              possibleFailure: {
                id: '3',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '16',
                __typename: 'Risk'
              },
              __typename: 'ProcessFailure'
            }
          ],
          peopleFailures: [],
          __typename: 'ClassifiedRisk',
          severity: '2',
          likelihood: '3',
          confidenceLevel: 0.7941176470588236,
          lowConfidence: true,
          score: 0.6666666666666666,
          contributors: [
            {
              id: 'a776ac27-e7b9-4b63-aa39-ed68e6eab130',
              featureName: 'id',
              featureValue: '16',
              weight: 0.42,
              __typename: 'Contributor'
            },
            {
              id: 'a4478201-ffdf-4add-b90c-d22ce319830f',
              featureName: 'cause',
              featureValue: 'strategy',
              weight: 0.22,
              __typename: 'Contributor'
            },
            {
              id: '45af096e-b89d-4044-a1b6-3f2b940589d2',
              featureName: 'cause',
              featureValue: 'operating',
              weight: 0.18,
              __typename: 'Contributor'
            },
            {
              id: '01ff0eb5-47f7-41b5-b03a-452f55be3f33',
              featureName: 'title',
              featureValue: 'operating',
              weight: 0.18,
              __typename: 'Contributor'
            },
            {
              id: 'c001c213-0063-4f88-af4b-0aac31eaa98f',
              featureName: 'cause',
              featureValue: 'lack',
              weight: 0.17,
              __typename: 'Contributor'
            },
            {
              id: '33bd2fa4-887c-48c2-983b-9de09b31bbae',
              featureName: 'title',
              featureValue: 'new',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '8c2c10e0-4165-4f58-a512-b7242e9436c3',
              featureName: 'title',
              featureValue: 'strategy',
              weight: 0.11,
              __typename: 'Contributor'
            },
            {
              id: '14a9ac8f-4790-4eff-804e-5b41642be9f0',
              featureName: 'consequence',
              featureValue: '/',
              weight: 0.1,
              __typename: 'Contributor'
            },
            {
              id: '23ab409b-d6fa-481e-8d79-de7ab98d6dd8',
              featureName: 'consequence',
              featureValue: 'crude',
              weight: 0.08,
              __typename: 'Contributor'
            },
            {
              id: '5f8a99b8-c9ce-47a3-9c31-cefc1296fec9',
              featureName: 'consequence',
              featureValue: 'start-up',
              weight: 0.07,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: 'b7aa156a-3512-46eb-aedd-4eae6205462c',
              featureName: 'consequence',
              featureValue: 'flowline',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '95923053-e168-4e18-969b-1745013fa729',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '2dac50db-2bf7-436c-a520-486bd28ea52d',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '777667f1-f26a-41f7-8abe-f78d2cce6138',
              featureName: 'id',
              featureValue: '177',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '84b2f8cf-8769-4735-b5b7-34d6d3ab67b7',
              featureName: 'title',
              featureValue: ' ',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'f2d37844-9676-4205-92a1-58967ebbccfb',
              featureName: 'description',
              featureValue: 'cost',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '4b6bc4d4-72e0-4339-8f19-0b7783f3bb21',
              featureName: 'id',
              featureValue: '179',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '2dcef929-65a3-4843-96cf-e4c126ab4eb1',
              featureName: 'id',
              featureValue: '176',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '2738d3a5-4bd9-4ff8-9ca9-4e43b5e3637e',
              featureName: 'id',
              featureValue: '178',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '54d9e521-3a31-453b-be9b-0c61297e6d5c',
              featureName: 'id',
              featureValue: '183',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        }
      ],
      __typename: 'RiskBucket'
    },
    {
      id: '1fa7024f-91fd-4121-a030-35a19731a965',
      severity: '3',
      likelihood: '2',
      numberOfRisks: 2,
      numberOfLowConfidenceRisks: 2,
      averageConfidenceLevel: 0.7647058823529412,
      risks: [
        {
          id: 'f6ea1270-6b68-464e-a0db-707e83a61472',
          risk: {
            id: '14',
            title: 'Flow assurance lead',
            description:
              'Currently meant to have Lead for Flow Assurance in country, however this has been delayed until end of 01/2012',
            cause:
              'Delays in staff placement and re-prioritising of workload (e.g. ILI pigging) is removing resource from a resource constraint team',
            consequence:
              'No preparation for receipt of Clarinet. Learnings from Zinc start-up might not be incorporated into Clarinet with higher likelihood of FA issues leading to loss of production. As well as unprepared for production surprises',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [],
          processFailures: [],
          peopleFailures: [
            {
              id: '1',
              role: {
                id: '1',
                __typename: 'Role'
              },
              possibleFailure: {
                id: '10',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '2',
              severity: '2',
              risk: {
                id: '14',
                __typename: 'Risk'
              },
              __typename: 'PeopleFailure'
            }
          ],
          __typename: 'ClassifiedRisk',
          severity: '3',
          likelihood: '2',
          confidenceLevel: 0.7647058823529412,
          lowConfidence: true,
          score: 0.6666666666666666,
          contributors: [
            {
              id: 'bd1e7089-2b71-4a81-8d20-e408d7784bde',
              featureName: 'id',
              featureValue: '14',
              weight: 0.85,
              __typename: 'Contributor'
            },
            {
              id: '65097f61-23c5-4e11-aa56-4de88c4a4d9f',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.32,
              __typename: 'Contributor'
            },
            {
              id: 'be0cb895-2220-42fa-b162-3822732e253d',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.32,
              __typename: 'Contributor'
            },
            {
              id: 'f0720c56-ce39-417c-99c5-496f59188c99',
              featureName: 'title',
              featureValue: 'assurance',
              weight: 0.3,
              __typename: 'Contributor'
            },
            {
              id: 'b9a6ab4a-ca0c-4c15-9bed-9953a717ad69',
              featureName: 'title',
              featureValue: 'lead',
              weight: 0.3,
              __typename: 'Contributor'
            },
            {
              id: 'b560a908-8ec9-4649-8f6b-13f5069ddfed',
              featureName: 'title',
              featureValue: 'flow',
              weight: 0.23,
              __typename: 'Contributor'
            },
            {
              id: 'd9f1ef57-ddfb-465b-aa3e-fdbe93c74711',
              featureName: 'description',
              featureValue: 'country',
              weight: 0.16,
              __typename: 'Contributor'
            },
            {
              id: '248d2832-a408-40ca-815a-84b6013332c7',
              featureName: 'consequence',
              featureValue: 'clarinet',
              weight: 0.15,
              __typename: 'Contributor'
            },
            {
              id: '8c30ac7a-a410-4493-99e6-529d23132ba6',
              featureName: 'cause',
              featureValue: 'resource',
              weight: 0.14,
              __typename: 'Contributor'
            },
            {
              id: '076d5259-f04f-4348-b45a-f482c6de867b',
              featureName: 'description',
              featureValue: 'currently',
              weight: 0.12,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '470f9f70-54b2-4ba1-a6d4-d534affe6070',
              featureName: 'id',
              featureValue: '155',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'a18eb3b0-31cb-442f-acc4-2e4fc3554d0a',
              featureName: 'id',
              featureValue: '15',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '7d809d46-0aec-44d9-9da0-21de714df863',
              featureName: 'id',
              featureValue: '133',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'eb4c38b6-e693-4190-b466-2917e3027afe',
              featureName: 'id',
              featureValue: '134',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0fd9041c-4aa5-423f-bbff-522bbd2cb544',
              featureName: 'title',
              featureValue: 'hybrid',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '9d2d2310-c4f4-4161-9b44-2c34f5bfa34e',
              featureName: 'title',
              featureValue: 'loop',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '2a2bdfa6-3b3d-4e70-83f2-e5564226f9e2',
              featureName: 'title',
              featureValue: 'constraints',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'd33670c1-f679-41c5-86bf-7f4a0726b993',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'f57f1c36-fa13-4a7c-ba43-9da0ec7e79b6',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '5f4818ca-4370-42da-b699-e29d1e8f36a3',
              featureName: 'consequence',
              featureValue: 'cost',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        },
        {
          id: '9229db3b-11db-4309-934f-8e4b9a5ae26e',
          risk: {
            id: '15',
            title: 'Resource constraints',
            description:
              'Currently there are 2 engineering vacancies in FA team in country and resource constraints in headquarters',
            cause:
              'Delay in acquiring Engineering contract support early in project stage',
            consequence:
              'Could cause loss of focus and increase in likelihood of major event leading to loss of integrity.',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            discipline: {
              id: '1',
              name: 'Flow Assurance',
              __typename: 'DisciplineRisk'
            },
            __typename: 'Risk'
          },
          engineeringModule: {
            id: '5',
            name: 'Subsea Proudction Flowlines',
            topology: {
              id: '1',
              onshoreOffshore: 'Offshore',
              upstreamDownstream: 'Upstream',
              oilGas: 'Oil',
              facilityType: 'FPSO',
              __typename: 'Topology'
            },
            hardwares: [
              {
                id: '1',
                __typename: 'Hardware'
              },
              {
                id: '2',
                __typename: 'Hardware'
              },
              {
                id: '3',
                __typename: 'Hardware'
              },
              {
                id: '4',
                __typename: 'Hardware'
              },
              {
                id: '5',
                __typename: 'Hardware'
              },
              {
                id: '6',
                __typename: 'Hardware'
              },
              {
                id: '7',
                __typename: 'Hardware'
              },
              {
                id: '8',
                __typename: 'Hardware'
              },
              {
                id: '9',
                __typename: 'Hardware'
              },
              {
                id: '10',
                __typename: 'Hardware'
              },
              {
                id: '11',
                __typename: 'Hardware'
              },
              {
                id: '12',
                __typename: 'Hardware'
              },
              {
                id: '13',
                __typename: 'Hardware'
              },
              {
                id: '14',
                __typename: 'Hardware'
              }
            ],
            criticality: 'High',
            __typename: 'EngineeringModule'
          },
          hardwareFailures: [],
          processFailures: [],
          peopleFailures: [
            {
              id: '2',
              role: {
                id: '2',
                __typename: 'Role'
              },
              possibleFailure: {
                id: '10',
                __typename: 'Failure'
              },
              description: '',
              likelihood: '1',
              severity: '2',
              risk: {
                id: '15',
                __typename: 'Risk'
              },
              __typename: 'PeopleFailure'
            }
          ],
          __typename: 'ClassifiedRisk',
          severity: '3',
          likelihood: '2',
          confidenceLevel: 0.7647058823529412,
          lowConfidence: true,
          score: 0.6666666666666666,
          contributors: [
            {
              id: 'f4330397-df52-432b-95a1-8d6846eb0970',
              featureName: 'id',
              featureValue: '15',
              weight: 0.86,
              __typename: 'Contributor'
            },
            {
              id: '3f1fac7e-076e-4b50-9b55-889a16d28d92',
              featureName: 'title',
              featureValue: 'constraints',
              weight: 0.46,
              __typename: 'Contributor'
            },
            {
              id: '98ec3ae8-a4f7-4342-b279-410282d46563',
              featureName: 'title',
              featureValue: 'resource',
              weight: 0.34,
              __typename: 'Contributor'
            },
            {
              id: 'f3fda47e-ab57-457a-8e70-15bd59ffe568',
              featureName: 'discipline.id',
              featureValue: '1',
              weight: -0.32,
              __typename: 'Contributor'
            },
            {
              id: '591d0833-20e9-4881-844d-de2093e7cba4',
              featureName: 'discipline.name',
              featureValue: 'Flow Assurance',
              weight: -0.32,
              __typename: 'Contributor'
            },
            {
              id: 'e861711b-5df4-423a-b2e7-ca83628f342b',
              featureName: 'consequence',
              featureValue: 'likelihood',
              weight: 0.17,
              __typename: 'Contributor'
            },
            {
              id: '6c41b8a2-72b0-4554-b75b-540334af035f',
              featureName: 'cause',
              featureValue: 'acquiring',
              weight: 0.15,
              __typename: 'Contributor'
            },
            {
              id: 'f078f0e9-fc31-46b5-82a2-9f0e6e959bd0',
              featureName: 'cause',
              featureValue: 'stage',
              weight: 0.15,
              __typename: 'Contributor'
            },
            {
              id: '5df27d05-07e5-4e3d-b060-7d23fc7125f3',
              featureName: 'description',
              featureValue: 'country',
              weight: 0.14,
              __typename: 'Contributor'
            },
            {
              id: '4c5c9a54-1dd2-45bc-8f18-a5a2c5f1b050',
              featureName: 'cause',
              featureValue: 'early',
              weight: 0.12,
              __typename: 'Contributor'
            }
          ],
          recommends: [
            {
              id: '8fe4506f-8a67-4ba2-a5b9-fb8e1c460080',
              featureName: 'id',
              featureValue: '155',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '01fac0bd-ce67-4a04-b8b4-5a937a81a62b',
              featureName: 'id',
              featureValue: '14',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'a6504925-5981-4c3f-9538-05bf659decd3',
              featureName: 'id',
              featureValue: '133',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: 'c2baafc1-2f2b-48be-8bf1-e86847fc2583',
              featureName: 'id',
              featureValue: '134',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0607fc32-6801-4a74-b9b1-03ae5244272e',
              featureName: 'consequence',
              featureValue: 'production',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0d0a5ea5-c1bc-43c1-a15d-a038e4aecf3f',
              featureName: 'title',
              featureValue: 'hybrid',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '09747ab4-0bc6-4a1b-b23e-be7a7448b202',
              featureName: 'title',
              featureValue: 'loop',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '7e143552-7cc6-40a4-8b71-d57357c09c0e',
              featureName: 'title',
              featureValue: 'uncertainty',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '0a4e1a45-49ba-4f25-b69c-ce98a93571d5',
              featureName: 'description',
              featureValue: 'schedule',
              weight: 1,
              __typename: 'Contributor'
            },
            {
              id: '98c21a32-9cb8-41ae-b5b9-5efac81a3f90',
              featureName: 'consequence',
              featureValue: 'cost',
              weight: 1,
              __typename: 'Contributor'
            }
          ]
        }
      ],
      __typename: 'RiskBucket'
    }
  ],
  __typename: 'RiskProfile'
};
