/* eslint-disable quotes */
export const en = {
    language: 'English',
    lang: {
        en: 'En',
        fr: 'Fr'
    },
    langName: {
        en: 'English',
        fr: 'French',
        sp: 'Spanish',
        de: 'German',
        it: 'Italian',
        pt: 'Portuguese'
    },

    test: {
        plural: 'There are no apple | There is one apple | There are {count} apples'
    },

    page: {
        title: {
            reportBackgroundUsage: 'Background Usage Report',
            badRequest: 'Bad request',
            customProduct: '@.title:generic.atomic.customTemplate',
            backgrounds: 'Backgrounds',
            backgroundCategories: 'Background categories',
            codePromo: 'Promotional Codes',
            createSession: 'Create session',
            crosssells: '@.capitalize:generic.atomic.crosssells',
            debug: 'Debug',
            forbidden: 'Forbidden',
            forgotPassword: 'Forgot Password',
            freeShipping: 'Free shipping',
            internalServerError: 'Internal server error',
            invite: 'Accept invite',
            labelPrint: 'Print label',
            login: 'Login',
            logout: 'Logout',
            manageSessions: 'Manage sessions',
            notFound: 'Not found',
            orders: 'Orders',
            orderView: 'View order',
            orderPrint: 'Print order',
            products: '@.capitalize:generic.atomic.products',
            productCategories: 'Product categories',
            productCatalogs: 'Catalogs',
            productThemes: 'Product themes',
            promo: 'Promotional Code Campaigns',
            reportSales: 'Sales Report',
            shippingGroups: 'Delivery Groups',
            shippingOptions: 'Delivery Options',
            subjects: 'Subjects',
            subjectGroups: 'Subject groups',
            subjectCodeCreation: 'Subject code creation',
            unauthorized: 'Unauthorized',
            welcome: 'Welcome',
            workflows: 'Workflows'
        }
    },

    headerMenu: {
        welcome: 'Welcome',
        profile: 'Profile',
        theme: 'Theme',
        locale: 'Language',
        signOut: 'Sign Out',
        empty: 'It\'s empty'
    },

    messages: {
        archiveError: 'There was an error archiving the item',
        createError: 'There was an error creating the item',
        deleteError: 'There was an error deleting the item',
        missingInputs: 'Please fill in all required fields before proceeding',
        missingWorkflow: 'Please choose a workflow before proceeding',
        requestError: 'An error happened with the request',
        saveSuccess: 'Changes saved',
        saveError: 'There was an error saving your changes',
        loadError: 'There was an error while loading',
        invalidFields: 'One or more fields are incorrect, please review',
        uploadStarted: 'Upload has started, you can continue working but do not close or refresh this browser tab' +
            ' until it\'s finished, check notifications for more information',
        csvNotMatch: 'Please choose a .csv file',
        noWatermark: 'Please configure your watermark in the settings before proceeding',
        offline: 'You\'re offline',
        unattendedLogout: 'You were disconnected',
        passwordsDoNotMatch: 'Passwords do not match',
        passwordChanged: 'Password changed successfully',
        passwordChangedError: 'There was an error changing your password, please try again later',
        discountErrorTitle: 'Discount Option Error',
        discountErrorMessage: 'You must select a discount catalog to use the discount option. When using scaling' +
            ' prices, ensure both the regular and discount prices have the same number of steps.',
        storeNotConfigured: 'The store is not fully configured, please complete the setup before proceeding',
        uniqueCCPaymentProcessorErrorTitle: 'Credit Card Payment Processor',
        uniqueCCPaymentProcessorErrorMessage: 'You can only have one credit card payment processor active at a time.' +
            ' You must deactivate {app} before activating {newApp}. Do you want to replace it with this' +
            ' one?',
        digitalOptionsErrorTitle: 'Digital Option Error',
        digitalOptionsErrorMessage: 'You must enter a price to use the digital option. You must also enter' +
            ' a price if you want to use groups digitals.'
    },

    commonHeaders: {
        created: 'Created',
        lastLogin: 'Last Login'
    },

    activities: {
        tabsTitles: {
            appIntegration: 'Applications',
            reportBackgroundUsage: 'Background Usage Report',
            backgroundCategories: 'Categories',
            backgrounds: 'Backgrounds',
            campaign: 'Promo Codes',
            codePromo: 'Promo Codes',
            changePlan: 'Change Plan',
            createSession: 'Create Session',
            crosssells: '@.capitalize:generic.atomic.crosssells',
            customProduct: '@.title:generic.atomic.customTemplate',
            deactivateSubscription: 'Deactivate Subscription',
            exposeCodeSnippet: 'Website',
            freeShipping: 'Free Shipping',
            manageContactInfo: 'Contact Info',
            manageSessions: 'Manage Sessions',
            manageSubscription: 'Manage Subscription',
            manageUsers: 'Manage Users',
            orders: 'Orders',
            productCatalogs: 'Catalogs',
            productCategories: 'Categories',
            productThemes: 'Themes',
            products: 'Products',
            reportSales: 'Sales Report',
            shippingGroups: 'Groups',
            shippingOptions: 'Options',
            storeCustomization: 'Customization',
            storeLanguages: 'Languages',
            storeStatus: 'Lockdown',
            subjectCodeCreation: 'Code Creation',
            subjectGroups: 'Subject Groups',
            subjects: 'Subjects',
            subscriptionStatus: 'Subscription Status',
            taxId: 'Sales Tax',
            workflows: 'Workflows'
        },
        titles: {
            dashboard: 'Dashboard',
            settings: 'Settings',
            campaign: 'Marketing',
            configureStore: 'Store',
            backgrounds: 'Backgrounds',
            groups: 'Groups',
            integration: 'Integration',
            management: 'Management',
            products: 'Products',
            orders: 'Orders',
            reports: 'Reports',
            manageSessions: 'Sessions',
            shipping: 'Deliveries',
            shippingGroups: 'Deliveries',
            subjects: 'Subjects',
            subscription: 'Subscription',
            userProfile: 'Profile',
            users: 'Users',
            workflows: 'Workflows'
        },
        all: {
            internalNameExists: '@:generic.atomic.internalName already exists, please choose another one',
            internalNameUseWrongCharacters: '@:generic.atomic.internalName uses wrong characters'
        },
        appIntegration: {
            title: 'App Integrations',
            description: 'Integrate your store with third-party applications to enable features such as shipping' +
                ' and payment processing. You will need to configure at least one payment processor to start using' +
                ' your store.',
            appType: {
                shipping: 'Shipping',
                paymentProcessor: 'Payment Processor'
            },
            apps: {
                'canada-post': 'Canada Post',
                elavon: 'Elavon',
                stripe: 'Stripe',
                chase: 'Chase'
            },
            general: {
                apiKey: 'API Key',
                merchantId: 'Merchant ID',
                userId: 'User ID',
                pin: 'PIN',
                apiPassword: 'Password',
                apiClientId: 'Client ID',
                username: 'Username',
                signature: 'Signature',
                debug: 'Debug endpoint'
            },
            prompts: {
                deactivateAppTitle: 'Deactivate application',
                deactivateApp: 'Are you sure you want to deactivate {app}?'
            },
            canadaPost: {
                title: 'Canada Post',
                description: 'Link the Canada Post API to your shop allow your store to calculate the shipping cost for' +
                    ' each transaction based on the user location in relation to yours.',
                infos: {
                    notice: 'API key For Shipping with Canada Post',
                    explanation: 'Pictaccio can use the Canada Post API to calculate the' +
                        ' shipping rates based on your and your customer addresses.'
                },
                api: {
                    username: 'Username',
                    password: 'Password',
                    customerNumber: 'Customer Number'
                }
            },
            elavon: {
                title: 'Elavon',
                description: 'Link the Elavon API to your shop to allow your store to do transactions with credit' +
                    ' cards.',
                infos: {
                    notice: 'API key for processing payment with Elavon',
                    explanation: 'Pictaccio can use the Elavon API to securely process the' +
                        ' different payment manipulations required for your shop.'
                }
            },
            paypal: {
                title: 'Paypal',
                description: 'Link the Paypal API to your shop to allow your store to do transactions using the' +
                    ' Paypal platform.',
                infos: {
                    notice: 'API key for processing payment with Paypal',
                    explanation: 'Pictaccio can use the Paypal API to securely process the' +
                        ' different payment operations required for your shop.'
                }
            },
            stripe: {
                title: 'Stripe',
                description: 'Link the Stripe API to your shop to allow your store to do transactions with credit' +
                    ' cards.',
                infos: {
                    notice: 'API key for processing payment with Stripe',
                    explanation: 'Pictaccio can use the Stripe API to securely process credit cards with' +
                        ' Stripe.'
                },
                api: {
                    publishableKey: 'Publishable Key',
                    secretKey: 'Secret Key'
                }
            },
            tutorial: {
                whatIs: 'Integrate payment processor, shipping vendors and labs to your workflow'
            }
        },
        backgrounds: {
            title: 'Backgrounds',
            single: 'Background',
            addBtn: 'Create a background',
            add: {
                title: 'Create new background'
            },
            edit: {
                title: 'Edit {background}\'s infos',
                reference: '@:generic.atomic.internalName',
                name: 'Name',
                tags: 'Tags',
                image: 'Image',
                featured: 'Featured'
            },
            productionIdentifierExists: '@:generic.atomic.internalName already exists, please choose another one.',
            productionIdentifierNoUnused: 'Maximum amount of backgrounds reached, we recommend to delete or edit' +
                ' less popular backgrounds to add a new one. We limit the amount of backgrounds to keep the' +
                ' application running smoothly.',
            tutorial: {
                whatIs: 'Give the opportunity to your customers to choose a background for their green screen photos',
                addBtn: 'Click here to create a new background'
            }
        },
        backgroundCategories: {
            title: 'Categories',
            single: 'Background Category',
            addBtn: 'Create a background Category',
            tutorial: {
                whatIs: 'Present your backgrounds to your customers in organized categories',
                addBtn: 'Click here to create a new background category'
            }
        },
        backgroundPopularity: {
            title: 'Background Popularity'
        },
        billingPayment: {
            generic: {
                messages: {
                    noProblem: 'All Good!'
                }
            }
        },
        storeCustomization: {
            brandingLogoLabel: 'Logo',
            brandingFaviconLabel: 'Favicon',
            brandingSignatureLabel: 'Signature',
            color: {
                accent: 'Accent',
                background1: 'Background 1',
                background2: 'Background 2',
                background3: 'Background 3',
                importantBackground1: 'Important Background 1',
                importantBackground2: 'Important Background 2'
            },
            invalidUrl: 'Invalid URL, please enter a valid URL',
            selectColor: 'Brand color',
            setStoreName: 'Store Name',
            setUrls: 'External URLs',
            title: 'Customization',
            tutorial: {
                whatIs: 'Customize the appearance of your store to harmonize to your colours'
            },
            uploadImages: 'Upload Images',
            uploadLogo: 'Logo',
            uploadLogoError: 'ERROR: Non SVG/PNG/JPG files are not allowed.',
            uploadWatermark: 'Watermark',
            urls: {
                contact: 'Contact us',
                root: 'Your website',
                termsAndConditions: 'Terms of use'
            }
        },
        customProduct: {
            title: '@.capitalize:generic.atomic.customTemplate',
            single: '@.capitalize:generic.atomic.customTemplate',
            addBtn: 'Create a @.capitalize:generic.atomic.customTemplate',
            tutorial: {
                whatIs: 'Give your customers flexibility when selecting their products. @.capitalize:generic.atomic.customTemplates give them an' +
                    ' amount of choices to select for a fixed price',
                addBtn: 'Click here to create a new @.capitalize:generic.atomic.customTemplate'
            }
        },
        changePlan: {
            choosePlan: 'Choose Plan',
            currentPlan: 'Current Plan'
        },
        campaign: {
            single: 'Campaign',
            addBtn: 'Create a campaign',
            main: {
                prefix: 'Prefix',
                amount: 'Amount',
                created: 'Created',
                modified: 'Modified'
            },
            tutorial: {
                whatIs: 'Generate any number of promo codes, all organized in campaigns',
                addBtn: 'Click here to create a new campaign'
            },
            dialog: {
                restrictionSection: 'Restrictions'
            }
        },
        createSession: {
            title: 'Create Session',
            breadcrumb: {
                sessionInfo: 'Session Info',
                productSection: 'Products',
                shippingSection: 'Delivery',
                subjects: 'Subjects',
                photos: 'Photos',
                groups: 'Groups'
            },
            sessionInfo: {
                multipleColor: 'Multiple Colours',
                sessionName: 'Session Name',
                sessionDate: 'Publish on',
                sessionDates: 'Session Dates',
                sessionExpirationDate: 'Expire on',
                crosssell: '@.capitalize:generic.atomic.crosssells',
                colorSelector: 'Session Colour',
                colorExplanation: 'This colour is displayed on all printed copies of an order and can be used to' +
                    ' know which session it belongs to at a quick glance.',
                colorExplanationTitle: 'What Are Session Colours?',
                colorSuggestion: 'Colour Suggestion'
            },
            options: {
                autosend: 'Send digitals automatically',
                crosssell: '@.capitalize:generic.atomic.crosssells',
                digitals: 'Enable Digitals',
                digitalsExplanation: 'Enabling digitals on this session will allow customers to buy a digital copy' +
                    ' of the selected photos.',
                digitalsAutoSendingExplanation: 'The photos requested as copy digital can be sent as soon as the' +
                    ' order is completed if no touchups are selected and if the option is enabled.',
                digitalsAllowGroupsExplanation: 'Customers can buy digital copies of the group photos if the option' +
                    ' is enabled',
                digitalsExplanationTitle: 'Digitals',
                digitalsAutoSendingExplanationTitle: 'Auto Send Digitals',
                digitalsAllowGroupsExplanationTitle: 'Allow Groups Digitals',
                discount: 'Discount',
                discountExplanationTitle: 'Allow Discount on Digital items',
                discountExplanation: 'Enabling this option will allow you to set discount amounts' +
                    ' on this session when certain products are added to the cart. To use this feature, you must' +
                    ' first create a product catalog with the products you want to use for the discount. The amounts' +
                    ' defined here are removed from the price of the digital items.',
                discountCatalog: 'Discount Catalog',
                discountCatalogPlaceholder: '(Select a catalog)',
                digitalsDiscount: 'Digital Price Discount',
                groupDigitalsDiscount: 'Group Digitals Price Discount',
                groupDigitals: 'Allow group digitals',
                digitalsPrice: 'Price for subjects',
                digitalGroupsPrice: 'Price for Groups',
                title: 'Options',
                touchups: 'Enable Touchups',
                touchupsExplanation: 'Enabling touchups on this session will allow customers to request changes to' +
                    ' unique photo for the selected fee.',
                touchupsExplanationTitle: 'Touchups',
                touchupsPrice: 'Price for touchups',
                crosssellExplanation: 'Choose a @:generic.atomic.crosssell option to offer your customers suggestions' +
                    ' for additional products before going to the checkout page. Click here to manage your' +
                    ' @:generic.atomic.crosssell items.',
                crosssellExplanationTitle: 'Unlock More Sales With @.capitalize:generic.atomic.crosssells',
                workflowExplanation: 'This is used to organize sessions in an area of photography (e.g. School, ' +
                    'Kindergarten, Sport, etc.)',
                workflowExplanationTitle: 'Organize Your Sessions With Workflows',
                workflow: 'Workflow'
            },
            groups: {
                emptyList: 'This section is empty, add an item here',
                shippingGroupsHelper: 'Select delivery groups to make them available in this session. Only the' +
                    ' options from these groups will be presented to your customers on this session.',
                productCatalogsHelper: 'Select catalogs to assign products to the session. Only these products will be' +
                    ' presented to your customers for this session.'
            },
            shippingSection: {
                baseShippingGroup: 'Base delivery group',
                baseShippingGroupExplanation: 'Will create a copy of the selected group and append the delivery' +
                    ' option that will be created bellow.',
                copyLabel: 'Create a new delivery group using the items from {group} and append a Deliver to' +
                    ' Establishment option.<br><br>The new group will contain the following items in addition to the' +
                    ' Deliver to Establishment option: {items}<br><br>The new group will be named: {name}',
                copyLabelEmpty: 'No group selected',
                copyPromptEmpty: 'Do you want to create a copy of {group1}? {group2} will be created.',
                copyPromptEmptyTitle: 'Copy Without change?',
                copyPromptNoSelection: 'Please select a group to copy',
                price: 'Price',
                shippingGroupName: '@.capitalize:generic.atomic.internalName',
                shippingOptionName: '@.capitalize:generic.atomic.internalName',
                shippingOptionNames: 'Delivery Option Names',
                timeline: 'Add return to establishment',
                copyOptionSuffix: 'Return to {establishment}',
                copyGroupSuffix: '{establishment} Group',
                finishCopy: 'Create Group'
            },
            importCsv: {
                title: 'Import CSV',
                instructions: 'Select a CSV by clicking the upload icon, then match the columns to the information ' +
                    'types supported. This allow all the functionalities of the application to behave correctly. ' +
                    'Names and codes are required. Group allow the app to assign photos to groups and group to ' +
                    ' subjects. Unique ID allow the code request made by your customers to be automated.',
                firstName: 'First Name',
                lastName: 'Last Name',
                group: 'Group',
                uid: 'Unique ID',
                code: 'Code',
                emptyDropdown: 'Import a csv first',
                prompts: {
                    existingCodesTitle: 'Existing Codes',
                    existingCodes: 'Please note that some of the codes in the csv are already in use. ' +
                        'Please review the list and make the necessary changes before proceeding.',
                    oneExistingCodes: 'The following code is already in use: {codes}',
                    fewExistingCodes: 'The following codes are already in use: {codes}',
                    moreExistingCodes: 'The following codes are already in use: {codes} and {count} more',
                    invalidCodesTitle: 'Invalid Codes',
                    invalidCodes: 'The csv contains invalid codes, please correct them before proceeding',
                    noData: 'No data found, please upload a valid csv file and assign the columns to the right fields',
                    noDataTitle: 'No data found',
                    invalidColumnsTitle: 'Invalid Columns',
                    invalidColumns: 'The csv contains invalid columns, please correct them before proceeding.'
                },
                warnings: {
                    existingCodes: 'Some of the codes in the csv are already in use. Please review the list and make' +
                        ' the necessary changes before proceeding.',
                    invalidCodes: 'The csv contains invalid codes, likely because the use of unsupported characters. ' +
                        'Please correct them before proceeding.',
                    noData: 'No data found, please upload a valid csv file and assign the columns to the right fields',
                    invalidColumns: 'The csv contains invalid columns, please correct them before proceeding.'
                }
            },
            validateCsvPhotos: {
                headers: {
                    name: 'Subject',
                    group: 'Group',
                    code: 'Code',
                    photo: 'Photo'
                }
            },
            importPhotos: {
                callToAction: 'Drop your photos below or click&nbsp;<u>here</u>&nbsp;to browse files',
                unmatchedImages: '0/{total} photos does not match a code or group |' +
                    ' 1/{total} photo do not match a code or group |' +
                    ' {n}/{total} photos does not match a code or group',
                unmatchedSubjects: '0/{total} subjects are missing images |' +
                    ' 1/{total} subject are missing images |' +
                    ' {n}/{total} subjects are missing images',
                unmatchedGroups: '0/{total} groups are missing images |' +
                    ' 1/{total} group are missing images |' +
                    ' {n}/{total} groups are missing images'
            },
            preview: {
                groupTitle: 'Groups',
                subjectTitle: 'Subjects',
                unknownName: 'Name Unknown'
            },
            notification: {
                title: 'Uploading Session'
            }
        },
        crosssells: {
            single: '@.capitalize:generic.atomic.crosssell',
            addBtn: 'Create a @:generic.atomic.crosssell',
            prompt: {
                deleteTitle: 'Delete @:generic.atomic.crosssell'
            },
            tutorial: {
                whatIs: 'Incite your customers with products they may have not seen just before they' +
                    ' proceed to checkout',
                addBtn: 'Click here to create a new @:generic.atomic.crosssell'
            }
        },
        dashboard: {
            welcome: `Welcome {name}`,
            storeSetup: {
                skipForNow: 'Skip',
                skipForever: 'Skip forever',
                title: 'Finish setting up your store',
                progress: 'done',
                steps: {
                    appIntegration: {
                        name: 'Set up your app integrations',
                        link: 'Open app integration',
                        description: 'This will allow your store to take payments, calculate shipping, etc.'
                    },
                    customizeStore: {
                        name: 'Customize your store',
                        link: 'Open store customization',
                        description: 'This will allow you to apply your branding colour and logo to your ' +
                            'online store.'
                    },
                    languages: {
                        name: 'Set up your store languages',
                        link: 'Open store languages',
                        description: 'Choose which languages are used on your store.'
                    },
                    contact: {
                        name: 'Set up your contact information',
                        link: 'Open contact information',
                        description: 'Set up your store address, phone number and email.'
                    },
                    taxId: {
                        name: 'Set up your tax ID',
                        link: 'Open tax ID',
                        description: 'Configure your tax information.'
                    },
                    inviteUsers: {
                        name: 'Optional: invite users',
                        link: 'Open users',
                        description: 'Invite your team members to work on your store.'
                    },
                    integration: {
                        name: 'Integrate your store in your website',
                        link: 'Open code snippet',
                        description: 'Redirect customers to your store through your website.'
                    },
                    products: {
                        name: 'Create products',
                        link: 'Open products',
                        description: 'Start populating your store with products.'
                    },
                    sessions: {
                        name: 'Create your first session',
                        link: 'Open create session',
                        description: 'Start using your store by creating a session allowing your customers ' +
                            'to purchase their photos.'
                    }
                }
            }
        },
        exposeCodeSnippet: {
            title: 'Code Snippet',
            description: 'Copy those snippets of code in your own website to integrate a subject code input box' +
                ' and allow your subjects to be redirected to the Pictaccio product page.',
            label: {
                head: 'Place in head',
                body: 'Place in body'
            },
            messages: {
                copySuccess: 'Code successfully copied to clipboard!'
            }
        },
        freeShipping: {
            title: 'Free Shipping',
            confirmTitle: 'Update Free Shipping',
            confirmMessage: 'Are you sure you want to update the free shipping status?',
            description: 'Offer free shipping to your customers by setting a threshold amount. This will encourage' +
                ' them to spend more in your store. The promo is currently' +
                ' <b style="color: {promoStatusColor}">{promoStatus}</b>. The order subtotals that are above' +
                ' the threshold amount will have free shipping.',
            enable: 'Enable',
            threshold: 'Threshold Amount',
            after: 'On orders of more than ',
            notice: 'Enable free shipping by selecting a threshold amount',
            thresholdExplanation: 'This threshold is used to apply free shipping on orders above the inserted amount.',
            thresholdExplanationTitle: 'Apply free shipping',
            tutorial: {
                whatIs: 'Thank your big customers, set the threshold and give them free shipping'
            }
        },
        manageContactInfo: {
            title: 'Manage Contact Info',
            infos: {
                notice: 'This information will be visible to your customers in various places on your store.'
            },
            updatePhone: {
                title: 'Phone number',
                _main: 'Main'
            },
            updateAddress: {
                title: 'Address',
                ui: {
                    addressLine1: 'Address line 1',
                    addressLine2: 'Address line 2',
                    addressUnit: 'Unit',
                    addressPostalCode: 'Postal Code',
                    addressCountry: 'Country',
                    addressProvince: 'Province',
                    addressCity: 'City'
                }
            },
            updateEmail: {
                title: 'Emails',
                '_customer-service': 'Customer Service',
                _notifications: 'Notifications'
            }
        },
        manageSessions: {
            title: 'Manage Sessions',
            single: 'Session',
            addBtn: 'Create a session',
            seeSubjects: 'Subjects and groups',
            hints: {
                goToWorkflow: 'Go to Workflow',
                noWorkflow: 'No workflow has been made yet, go to the workflow page located in the side menu to' +
                    ' create one.'
            },
            tutorial: {
                whatIs: 'Organize your photoshoots in sessions, were you can customize the content accessible to' +
                    ' your customers',
                addBtn: 'Click here to create a new session',
                addBtnNoWatermark: 'This is where you\'d start creating your sessions, however, you need to make a' +
                    ' little detour through the settings to configure your watermark first. This ensures that your' +
                    ' photos are always published with your watermark.',
                seeSubject: 'Click on the eye icon to see the subjects of each session',
                settingsNoWatermark: 'Open the settings to configure your watermark'
            }
        },
        subjectGroups: {
            title: 'Groups from {session}',
            single: 'Group',
            addBtn: 'Add a group',
            tutorial: {
                whatIs: 'Manage and sell group photos associated to the right subject',
                addBtn: 'Click here to create a new group for the current session'
            }
        },
        subjects: {
            title: 'Subjects from {session}',
            single: 'Subject',
            addBtn: 'Add a subject',
            swapSubject: 'Swap Subject photos',
            tutorial: {
                whatIs: 'Manage information and photos of all subjects in the selected session here',
                addBtn: 'Click here to create a new subject'
            }
        },
        manageSubscription: {
            cancelSubscription: {
                title: 'Cancel Subscription',
                shortNotice: 'You can stop using our services at any time.',
                ui: {
                    confirmSendButton: 'Confirm and send',
                    improvement: 'How can we improve Pictaccio?'
                },
                notice: 'Your subscription will be canceled at the end of the billed month.',
                confirm: 'To confirm the deactivation, please enter -CONFIRM- in the following box.'
            },
            updateCC: {
                title: 'Update Credit Card',
                ui: {
                    cardNumber: 'Card Number',
                    cardName: 'Name on Card',
                    cardExpiration: 'Expiration Date',
                    cardCVV: 'Card CVV'
                },
                currentCC: 'Card ending in: ',
                expire: 'Expire in: '
            }
        },
        manageUsers: {
            title: 'Manage Users',
            single: 'User',
            multiple: 'Users',
            addBtn: 'Invite a user',
            toast: {
                error: 'There was an error with the user operation, please try again later',
                inviteSuccess: 'User invited successfully',
                editSuccess: 'User edited successfully'
            },
            add: {
                title: 'Invite User'
            },
            edit: {
                title: 'Edit {user}\'s infos',
                firstName: 'First Name',
                lastName: 'Last Name',
                email: 'Email',
                inviteExpirationWarning: 'The invitation sent to the user will expire after 24 hours.',
                roles: 'Roles',
                placeholderRole: '(Choose a role)',
                resetPassword: 'Reset Password',
                resetTotp: 'Reset authentication method'
            },
            help: {
                title: 'Roles access level'
            },
            headers: {
                name: 'Users',
                roles: 'Roles',
                status: 'Status',
                access: 'Access'
            },
            prompt: {
                destructive: 'Are you sure you want to delete {item} users?'
            },
            roles: {
                superAdmin: 'Super Administrator',
                admin: 'Administrator',
                customerService: 'Customer Service',
                productManager: 'Product Manager',
                reportViewer: 'Report Viewer',
                productionManager: 'Production Manager',
                sessionManager: 'Session Manager'
            },
            activities: {
                seePromoCode: 'See Promo Code',
                createPromoCode: 'Create Promo Code',
                editOrders: 'Edit Orders',
                deleteOrders: 'Delete Orders',
                createSession: 'Create Session',
                seeSessions: 'See Sessions',
                deleteSessions: 'Delete Sessions',
                editStore: 'Edit Store'
            }
        },
        orders: {
            title: 'Orders',
            bulkPrintOrder: 'Bulk Print Orders',
            bulkPrintOrderNoSelectionTitle: 'No orders selected',
            bulkPrintOrderNoSelectionMessage: 'Please select at least one order to print orders',
            bulkPrintLabel: 'Bulk Print Labels',
            bulkPrintLabelNoSelectionTitle: 'No orders selected',
            bulkPrintLabelNoSelectionMessage: 'Please select at least one order to print labels',
            exportContactsNormal: 'Export Contacts (Normal)',
            exportContactsExcel: 'Export Contacts (Excel)',
            exportContactsNoSelectionTitle: 'No orders selected',
            exportContactsNoSelectionMessage: 'Please select at least one order to export contacts',
            tutorial: {
                whatIs: 'See all your orders here',
                assignTask: 'Click here to assign the order to a member of your team'
            }
        },
        printOrder: {
            info: {
                address: "Address",
                companyName: "Company Name",
                date: "Date",
                email: "Email",
                phone: "Phone",
                sessionColor: "Session Colour"
            }
        },
        products: {
            title: 'Products',
            single: 'Product',
            addBtn: 'Create a Product',
            tutorial: {
                whatIs: 'Sell flexible products like custom or themed products to your customers',
                addBtn: 'Click here to create a new product'
            }
        },
        productThemes: {
            title: 'Themes',
            single: 'Theme Set',
            addBtn: 'Create a Theme Set',
            tutorial: {
                whatIs: 'Create theme sets to allow themed variation on your products',
                addBtn: 'Click here to create a new theme set'
            },
            prompt: {
                update: 'Some products may use this theme set. Archiving images will send a notification to' +
                    ' advise which products have missing images. Do you wish to archive the associated images?'
            }
        },
        productCategories: {
            title: 'Categories',
            single: 'Product Category',
            addBtn: 'Create a Product Category',
            tutorial: {
                whatIs: 'Present your products in categories like packages or gift idea. They will be grouped' +
                    ' together on your store for your customers to navigate it better.',
                addBtn: 'Click here to create a new product category'
            }
        },
        productCatalogs: {
            title: 'Catalogs',
            single: 'Catalog',
            addBtn: 'Create a catalog',
            prompts: {
                missingValueMessage: 'Please fill every name fields and select at least 1 product',
                missingValueMessageProduct: 'Please fill every name fields',
                missingValueTitle: 'Missing Values'
            },
            tutorial: {
                whatIs: 'Catalogs allow to present different products to your customers based on which' +
                    ' catalogs are assigned to each sessions',
                addBtn: 'Click here to create a new catalog'
            }
        },
        promoCodes: {
            title: 'Promo Codes',
            single: 'Promo Code',
            addBtn: 'Generate Promo Codes',
            messages: {
                codeCreationFailed: 'There was an error creating the promo codes, please try again later'
            },
            tutorial: {
                whatIs: 'Create promo codes to offer discounts to your customers',
                addBtn: 'Click here to create a bunch of promo codes'
            }
        },
        sales: {
            title: 'Sales'
        },
        shippingGroups: {
            title: 'Delivery Groups',
            single: 'Delivery Group',
            addBtn: 'Create a delivery group',
            tutorial: {
                whatIs: 'Quickly assign delivery options to each sessions with delivery groups',
                addBtn: 'Click here to create a new delivery group'
            }
        },
        shippingOptions: {
            title: 'Delivery Options',
            single: 'Delivery Option',
            addBtn: 'Create a delivery option',
            options: {
                publishDate: 'Publish Date',
                publishDateHelp: 'Publishing date of the session, when your customers can start ordering' +
                    ' their photos.',
                expirationDate: 'Expiration Date',
                expirationDateHelp: 'Expiration date of the session, after which your customers won\'t be able to' +
                    ' make new orders.',
                productCode: 'Delivery Product Type',
                productCodeExplanation: 'Type of shipping offered by Canada Post for this shipping option' +
                    ' (Priority, Xpresspost or Regular Parcel)',
                canadaPost: {
                    expedited: 'Expedited Parcel',
                    priority: 'Priority',
                    regular: 'Regular Parcel',
                    xpressPost: 'Xpresspost'
                },
                envelopePrice: 'Envelope Price',
                envelopePriceExplanation: 'This will override the shipping option price if the weight of the client’s' +
                    ' order is below the weight specified in “Envelope weight limit”.',
                originPostalCode: 'Origin Postal Code',
                parcelThreshold: 'Envelope weight limit',
                parcelThresholdExplanation: 'Weight (g) where the products will no longer be sent by letter but' +
                    ' rather by parcel. Enter "0" so that products are always sent as packages.',
                envelopeEta: 'Envelope ETA',
                envelopeEtaExplanation: 'Estimation of time for an envelope to be delivered.',
                contactName: 'Contact Name',
                contactAddress: 'Pickup Address',
                daysAvailable: 'Days Available',
                contactPhone: 'Contact Phone',
                lateFees: 'Late Fees',
                lateFeesHelp: 'Choose the fees to be applied to orders placed after the late date.',
                expireDate: 'Deactivation date',
                expireDateHelp: 'After this date, this option will be deactivated. For example, the date after which' +
                    ' customers can no longer choose to have the order sent to the school.',
                increaseDate: 'Late date',
                increaseDateHelp: 'Late fees will be applied to orders placed after this date.',
                etaDate: 'Arrival date',
                etaDateHelp: 'Date when the orders are to be received by the establishment. For example, the date' +
                    ' when the orders will be delivered to the school and distributed to the students.'
            },
            tutorial: {
                whatIs: 'Give your customers the choice on how they will obtain their order, whether you ship it or' +
                    ' they come take it',
                addBtn: 'Click here to create a new delivery option'
            }
        },
        storeLanguages: {
            title: 'Store Languages',
            availableLanguagesDescription: 'Select the languages you want to make available to your customers. Drag' +
                ' the language in the list to change their priority, the first one will be considered' +
                ' the primary and used as fallback.'
        },
        storeStatus: {
            publicInfos: {
                title: 'Public Information',
                phone: {
                    title: 'Phone Number'
                },
                address: {
                    title: 'Postal Address'
                }
            },
            storeAvailability: {
                title: 'Store Availability',
                label: 'The store is currently',
                status: {
                    open: 'Open',
                    closed: 'Closed'
                },
                button: {
                    open: 'Reactivate',
                    close: 'Shutdown'
                },
                prompt: {
                    title: '{action} store',
                    message: 'You are about to {action} your store. ' +
                        '{showMessage}' +
                        'Are you sure you want to proceed?',
                    shutdownMessage: 'Your customer will see this message while trying to access your store:' +
                        '<div class="prompt-user-string">{message}</div>'
                },
                configuration: {
                    description: 'You need to configure your store before you can open it. You can do this by' +
                        ' navigating to the relevant sections noted below and finishing its configuration.',
                    configured: 'Configured',
                    notConfigured: 'Not Configured',
                    contact: 'Store Contact',
                    customization: 'Store Customization',
                    languages: 'Store Languages',
                    payment: 'Payment Processors',
                    taxes: 'Sale Taxes'
                }
            }
        },
        subjectCodeCreation: {
            title: 'Subject Code Generation',
            toolDescription: 'This tool can be used to generate codes that are guaranteed to be unique to your' +
                ' environment.',
            characterSet: {
                title: 'Character Set',
                description: 'Only these characters will be used to generate the subject codes.',
                alphaNumeric: 'AlphaNumeric',
                alphaNumericAlikeless: 'AlphaNumeric with look alike removed',
                numeric: 'Numeric',
                custom: 'Custom',
                customPreview: 'Custom Character Set',
                preview: 'Preview',
                selection: 'Selection'
            },
            prefix: {
                title: 'Prefix',
                description: 'All codes will be prefixed with this text.'
            },
            length: {
                title: 'Length'
            },
            numberToGenerate: {
                title: 'Number of Codes to Generate',
                maxCountExceeded: 'The requested number of codes exceeds the maximum allowed. Please reduce the' +
                    ' number of codes to generate or augment the length of the code.'
            },
            btn: 'Generate and Copy to Clipboard',
            tutorial: {
                whatIs: 'Generate unique code to identify each subjects correctly'
            }
        },
        subscriptionStatus: {
            currentSubscription: {
                title: 'Current Subscription',
                memberSince: 'Member Since',
                renewDate: 'Renewing Date'
            },
            billingPayment: {
                title: 'Billing & Payment',
                nextBillingDate: 'Next Billing Date',
                datePaid: 'Date Paid'
            }
        },
        taxId: {
            title: 'Manage Tax ID',
            manage: {
                ui: {
                    taxName: 'Tax Acronym',
                    taxId: 'Tax ID',
                    taxValue: 'Tax Rate',
                    legendFederal: 'Federal',
                    legendProvincial: 'Provincial',
                    legendState: 'Province'
                },
                taxInfo: {
                    title: 'Tax ID Information',
                    federalId: 'Federal Tax ID: ',
                    provincialId: 'Tax ID: '
                },
                taxValue: {
                    title: 'Tax Rates'
                },
                infos: {
                    notice: '',
                    explanation: 'Select your province of operation for tax purposes. This will be used to calculate' +
                        ' taxes on your store.'
                }
            }
        },
        userProfile: {
            changeUserName: 'Change User Name',
            cities: {
                edmonton: 'Edmonton',
                halifax: 'Halifax',
                iqaluit: 'Iqaluit',
                montreal: 'Montreal',
                regina: 'Regina',
                saintJohn: 'St. Johns',
                toronto: 'Toronto',
                vancouver: 'Vancouver',
                whitehorse: 'Whitehorse',
                winnipeg: 'Winnipeg',
                yellowknife: 'Yellowknife'
            },
            date: {
                yMD: 'Year/Month/Day',
                dMY: 'Day/Month/Year',
                mDY: 'Month/Day/Year'
            },
            inputFirstName: 'Name',
            inputLastName: 'Last Name',
            inputEmail: 'Email',
            inputTimeZone: 'Timezone',
            inputTimeFormat: 'Time Format',
            inputDateFormat: 'Date Format',
            inputPassword: 'Password',
            inputPasswordConfirm: 'Confirm Password',
            roles: 'Roles',
            relativeTimestamps: 'Use relative time when possible',
            resetTotpHelp: 'Reset the Multi Factor Authentication for your profile, scanning a QR code to get a new' +
                ' code to use to connect to your profile.',
            resetPasswordHelp: 'When you click this button, an email will be sent to the email address on file with' +
                ' a code. Input the code in the textbox that appears in the overlay and you will be able to reset' +
                ' your password.',
            messages: {
                validateResetTotpFailed: 'This code is invalid, please try again',
                authFailed: 'Authentication failed, please try again'
            },
            time: {
                HHmm: '24h',
                hhmma: 'AM/PM'
            }
        },
        viewOrder: {
            title: 'Order',
            orderWithId: 'Order #{id}',
            productInfoTitle: 'Products',
            commands: {
                assignSuccessToast: 'Order assigned successfully',
                assignFailedToast: 'An error occurred while assigning the order, please try again'
            },
            options: {
                touchup: 'Touchups',
                digitals: 'Digital Files'
            },
            comments: {
                title: 'Comments',
                assignTo: 'Assign to',
                deleteConfirmTitle: 'Delete comment',
                deleteConfirmMessage: 'Are you sure you want to delete this comment?',
                deleteFailedToast: 'An error occurred while deleting the comment, please try again',
                editFailedToast: 'An error occurred while editing the comment, please try again'
            },
            customer: {
                title: 'Contact',
                name: 'Name',
                firstName: 'First Name',
                lastName: 'Last Name',
                streetAddress1: 'Address',
                streetAddress2: 'Address 2',
                city: 'City',
                state: 'State',
                province: 'Province',
                region: 'Region',
                postalCode: 'Postal Code',
                country: 'Country',
                phone: 'Phone',
                email: 'Email'
            },
            transaction: {
                title: 'Transaction Information',
                productTotal: 'Subtotal',
                shipping: 'Delivery',
                promo: 'Promotion',
                total: 'Total'
            },
            taxes: {
                canadian: {
                    gst: 'GST',
                    pst: 'PST',
                    hst: 'HST',
                    qst: 'QST'
                }
            },
            shipping: {
                title: 'Delivery Information',
                option: 'Delivery Option',
                instruction: 'Delivery Instruction'
            },
            productList: {
                productPrice: 'Price',
                quantity: 'Quantity',
                subtotal: 'Subtotal',
                comment: 'Comment'
            },
            touchups: {
                commentUp: 'See details of the touchups by hovering over a photo in the previous section.'
            },
            comment: 'Comment',
            versioning: {
                title: 'Photos',
                sendSelection: 'Send Selection',
                updateCustomer: 'Notify Customer',
                badges: {
                    versions: '0 photos | 1 photo | {count} photos',
                    published: '{count} published'
                },
                prompts: {
                    notifyCustomerWithOpenPane: 'Do you want to save the changes you\'ve made before notifying the' +
                        ' customer?',
                    notifyCustomerWithOpenPaneTitle: 'Save Changes?'
                }
            },
            messages: {
                addCommentError: 'An error occurred while adding the comment, please try again',
                loadPublishedPhotosError: 'An error occurred while loading the published photos, please try again',
                notifyCustomerFailed: 'An error occurred while notifying the customer, please try again later',
                notifyCustomerNoUpdate: 'No changes were made to the photos, the customer will not be notified',
                notifyCustomerSuccess: 'The customer has been notified with success',
                orderLoadError: 'An error occurred while loading the order, please try again later',
                statusChangeSuccess: 'Status changed successfully',
                statusChangeError: 'An error occurred while changing the status, please try again',
                updateVersionError: 'An error occurred while updating the photo versions, please try again'
            },
            production: {
                title: 'Production'
            }
        },
        workflows: {
            title: 'Workflows',
            single: 'Workflow',
            addBtn: 'Create a workflow',
            tutorial: {
                whatIs: 'Optimize your time by setting up workflows which will give default options to your sessions' +
                    ' when creating them',
                addBtn: 'Click here to create a new workflow'
            }
        },
        reports: {
            sales: {
                series: {
                    sales: {
                        orderId: 'Order ID',
                        sessionId: 'Session ID',
                        date: 'Date',
                        numberOfSubjects: 'Number of subjects',
                        subtotal: 'Subtotal',
                        shipping: 'Shipping',
                        promoRebate: 'Promo Rebate',
                        taxes: 'Taxes',
                        returns: 'Returns',
                        returnFees: 'Return Fees',
                        total: 'Total'
                    },
                    products: {
                        productId: 'Product ID',
                        productInternalName: 'Product Name',
                        quantity: 'Quantity'
                    },
                    aggregates: {
                        subtotalSum: 'Subtotal Sum',
                        subtotalAvg: 'Subtotal Avg',
                        shippingSum: 'Shipping Sum',
                        shippingAvg: 'Shipping Avg',
                        promoRebateSum: 'Promo Rebate Sum',
                        promoRebateAvg: 'Promo Rebate Avg',
                        taxesSum: 'Taxes Sum',
                        taxesAvg: 'Taxes Avg',
                        returnsSum: 'Return Sum',
                        returnsAvg: 'Return Avg',
                        returnFeesSum: 'Return Fees Sum',
                        returnFeesAvg: 'Return Fees Avg',
                        totalSum: 'Total Sum',
                        totalAvg: 'Total Avg'
                    }
                }
            }
        }
    },

    activitiesCompanion: {
        codePromo: {
            title: 'Code promos',
            single: 'code promo',
            addBtn: 'Create code promos'
        }
    },

    pagination: {
        itemsPerPage: 'Items per page'
    },

    photoSwap: {
        dragSwapInstruction: 'Move photos by grabbing them, or the handle bellow each photos container,' +
            'and dragging them onto an other subject. Subjects can be reorganized with the handles on the left.'
    },

    timeline: {
        titles: {
            startDate: 'Start Date',
            endDate: 'End Date'
        },
        prompt: {
            dateOutsideExpected: 'Date Outside Expectations',
            dateOutsideExpectedMessage: 'The date you\'ve entered is before the previous date or over the end date. ' +
                'Make sure the information is correct.'
        }
    },

    dataTable: {
        headers: {
            allowMix: 'Allow Mix Subjects',
            amount: 'Amount',
            assignee: 'Assignee',
            basePrice: 'Handling cost',
            customProduct: '@.capitalize:generic.atomic.customTemplate Name',
            campaign: 'Marketing',
            categories: 'Workflow',
            category: 'Category',
            choices: 'Choices',
            code: 'Codes',
            codePrefix: 'Prefix',
            count: '# Used',
            crosssell: '@.capitalize:generic.atomic.crosssell',
            date: 'Date',
            descriptionLocale: 'Descriptions',
            expireDate: 'Expiration Date',
            featured: 'Featured',
            firstName: 'First name',
            group: 'Group',
            groupPhotoAllow: 'Allow Group Photos',
            id: 'ID',
            image: 'Image',
            images: 'Default Image',
            income: 'Income',
            internalName: {
                backgroundCategories: '@.capitalize:generic.atomic.internalName',
                campaign: '@.capitalize:generic.atomic.internalName',
                catalogs: '@.capitalize:generic.atomic.internalName',
                crosssells: '@.capitalize:generic.atomic.internalName',
                customProduct: '@.capitalize:generic.atomic.internalName',
                productCategories: '@.capitalize:generic.atomic.internalName',
                productThemes: '@.capitalize:generic.atomic.internalName',
                products: '@.capitalize:generic.atomic.internalName / SKU',
                sessions: '@.capitalize:generic.atomic.session',
                shippingGroups: '@.capitalize:generic.atomic.internalName',
                shippingOptions: '@.capitalize:generic.atomic.internalName',
                workflows: '@.capitalize:generic.atomic.internalName'
            },
            isCustomProduct: 'Is @.capitalize:generic.atomic.customTemplate',
            lastName: 'Last name',
            leadTime: 'Lead Time',
            method: 'Delivery method',
            month: 'Month',
            name: 'Name',
            nameLocale: 'Names',
            number: 'Reference',
            groupPhotoOnly: 'Only Group Photos',
            options: 'Options',
            order: 'Order ID',
            paid: 'Paid',
            photos: 'Photos',
            popProducts: 'Popular Products',
            price: 'Price',
            priority: 'Priority',
            productCategories: 'Category',
            productCatalogs: 'Catalogs',
            products: 'Products',
            publishDate: 'Publish Date',
            sales: 'Sales',
            scalingPrice: 'Scaling Price',
            session: 'Session',
            sessionColor: 'Colour',
            sessions: 'Sessions',
            shippingGroups: 'Delivery Groups',
            shippingOptions: 'Delivery Options',
            status: 'Status',
            subjects: 'Subjects',
            tags: 'Tags',
            themeImages: 'Images',
            themes: 'Themes',
            total: 'Total',
            uniqueCode: 'UID',
            used: 'Used',
            value: 'Value',
            variants: 'Variants',
            visitor: 'Visitors',
            weight: 'Weight',
            workflow: 'Workflow',
            workflows: 'Workflows'
        },
        body: {
            status: {
                toDo: "To Do",
                touchups: "Touchups",
                inProgress: "In Production",
                packaging: "Packaging",
                done: "Ready to Ship",
                cancelled: "Cancelled",
                shipped: "Shipped",
                delivered: "Delivered",
                returned: "Returned",
                refunded: "Refunded",
                error: "Error"
            },
            lastLogin: {
                na: 'Never logged in'
            },
            method: {
                fixedRate: 'Fixed Rate',
                canadaPost: 'Canada Post',
                pickUp: 'Pick Up',
                establishment: 'Establishment'
            }
        },
        placeholder: {
            noCrosssell: 'No @:generic.atomic.crosssell',
            notCustomProduct: 'Not custom package',
            notInCatalog: 'Not in a catalog',
            noTheme: 'No theme',
            noRestriction: '(Allow all)',
            noExistingTheme: 'No theme has been created yet.',
            chooseCategory: 'Select a category',
            chooseSession: 'Select a session',
            chooseWorkflow: 'Select a workflow',
            createTags: 'Add a tag',
            selectCategories: 'Select categories'
        },
        help: {
            groupPhotoAllowHelp: 'Allow customers to purchase group photos in this package.',
            allowMixHelp: 'Allow customers to mix and match photos from different subjects in the same package.',
            backgroundCategoriesPriorityHelp: 'This will order your background categories within the store. ' +
                'A priority 0 will appear before a priority 1 in the list, and so on.',
            basePriceHelp: 'Base price before adding additional fees (delivery fees, late fees, etc.)',
            customProductOptionsHelp: 'Choices will add a number of choices for the client while options adds variety. For a more concrete example of what will happen, refer to the table on the right to see what the customer will see.',
            campaignCodePrefixHelp: 'This prefix will be applied at the start of every code you create to' +
                ' differentiate them per promotion in the system. For example, if you write PRE, the codes created' +
                ' will look like PRE-34534 or PRE-22232.',
            campaignValueHelp: 'The value of the discount offered by this promotional code.',
            categoriesHelp: 'This is used to organize sessions in an area of photography (e.g. School, ' +
                'Kindergarten, Sport, etc.) and apply a default configuration.',
            colorHelp: 'This colour is displayed on all printed copy of an order and can be used to know which' +
                ' session it belongs to with a quick glance.',
            crosssellHelp: 'Choose a @:generic.atomic.crosssell option to offer your customer suggestions for' +
                ' additional products before going to the checkout page. Click here to manage your' +
                ' @:generic.atomic.crosssell items.',
            dateHelp: 'This date marks the moment customers will be able to purchase products and see their photos ' +
                'by using the subject codes associated with the session on the store.',
            expirationDateHelp: 'After this date, the subject codes associated with the session will no longer be ' +
                'active. A customer using their code after this date will not be able to purchase products with it ' +
                'or see the associated photos from the store',
            shippingOptions: {
                basePriceHelp: 'Base price before adding additional fees (delivery fees, late fees, etc.)',
                leadTimeHelp: 'The average time in days you expect for an order to be shipped to your customers.',
                nameLocaleHelp: 'Name of the delivery option presented to your customers.',
                shippingMethodHelp: 'Choose between the different delivery methods to offer your customers flexible' +
                    ' delivery options.'
            },
            internalNameHelp: 'This identifier will be used internally and must be unique.' +
                ' It will not be displayed to your customers, it\'s a utility name to help you with your organization.',
            customProductHelp: 'Enable personalized shopping experiences by allowing customers to customize their' +
                ' packages. This feature enhances customer satisfaction and engagement by providing flexible choice' +
                ' combinations. You can define options available in the package and the number of choices customers' +
                ' can make.',
            groupPhotoOnlyHelp: 'This option will allow customers to purchase only group photos in this package.',
            productCategoriesHelp: 'Enhance product discovery for customers by categorizing products into curated' +
                ' sections, such as gift ideas, packages, and seasonal favorites, streamlining the shopping' +
                ' experience.',
            productCategoriesNamesHelp: 'The names appearing on the store to divide products into' +
                ' categories.',
            productCatalogsProductHelp: 'Add the products to the product catalog. This will allow you to group' +
                ' products together and allow easy management of product availability in sessions.',
            productProductCatalogsHelp: 'Add the product to product catalogs. This will allow you to group products' +
                ' together and allow easy management of product availability in sessions.',
            productPriorityHelp:
                'Order in which the products will appear to the customer on the store (one product' +
                ' with a priority of 1 will appear after a priority of 0). If two products have the same' +
                ' priority, they will be on the same level, and will be placed arbitrarily between them.',
            productCategoriesPriorityHelp: 'Order in which the categories will appear to the customer on the store' +
                ' (one category with a priority of 1 will appear after a priority of 0). If two categories' +
                ' have the same priority, they will be on the same level, and will be placed arbitrarily between them.',
            scalingPriceHelp:
                'Option to decrease the price paid per additional item. The last pricing will be applied on every' +
                ' additional item past that point. You need to separate each pricing with a comma (,). For example:\n' +
                'You have a product where scaling prices are applied as 20, 15, 10.\nA customer chooses to buy this' +
                ' product 4 times. The pricing will be calculated as such:' +
                '\n1st item: 20$ \n2nd item: 15$ \n3rd item: 10$ \n4th item: 10$ \nTotal items: 55$',
            shippingGroupsHelp: 'The collection of delivery options you wish to use for this session. You can add' +
                ' options through the + menu if needed.',
            subjectCodeHelp: 'This code will be used by the customer to retrieve the photos associated to the subject' +
                ' by entering it at the appropriate place on the store.',
            themesHelp: 'Themes are variations applied to products to personalize them. You could for example' +
                ' have a mug that you offer in brown or green colour, in such a case the themes would' +
                ' be “green” and “brown”.'
        },
        messages: {
            noResultsFilter: 'No results found for the current filter, try to change the filter or clear it'
        }
    },

    errorPage: {
        400: {
            title: 'Bad Request',
            message: 'There was a problem with you request.'
        },
        401: {
            title: 'Unauthorized',
            message: 'You are not authorized to access this page.'
        },
        403: {
            title: 'Forbidden',
            message: 'You do not have permission to access this page.'
        },
        404: {
            title: 'Not Found',
            message: 'The page you are looking for doesn\'t exist'
        },
        500: {
            title: 'Internal Server Error',
            message: 'The server encountered an internal error or misconfiguration and was unable to complete' +
                ' your request.'
        }
    },

    toastMessages: {
        ERROR_DELETING: 'Error while deleting items.',
        SERVER_ERROR_CREATE: 'An error occurred while performing an operation on the server. (error 104)',
        SERVER_ERROR_READ: 'An error occurred while performing an operation on the server. (error 105)',
        SERVER_ERROR_UPDATE: 'An error occurred while performing an operation on the server. (error 106)',
        SERVER_ERROR_DELETE: 'An error occurred while performing an operation on the server. (error 107)',
        SERVER_READER_ERROR_READ: 'An error occurred while performing an operation on the server. (error 108)',
        UNKNOWN_ERROR: 'An unknown error has occurred',
        USER_EXIST: 'The user already exist',
        USER_OR_PASS_OR_TOKEN_INCORRECT: 'The information you have entered is invalid, please check again',
        SELF_DELETE: 'You cannot delete yourself',
        SELF_ARCHIVE: 'You cannot archive yourself'
    },

    toastGuiMessages: {
        successCancel: 'The changes has been canceled successfully',
        successUpdate: 'The changes has been updated successfully'
    },

    generic: {
        atomic: {
            crosssell: 'cross-sell',
            crosssells: 'cross-sells',
            customTemplate: 'custom template',
            customTemplates: 'custom templates',
            product: 'product',
            internalName: 'unique internal ID',
            internalNames: 'unique internal IDs',
            products: 'products',
            session: 'session',
            sessions: 'sessions'
        },
        blank: ' ',
        ui: {
            activate: 'Activate',
            add: 'Add',
            apply: 'Apply',
            archive: 'Archive',
            assignee: 'Assignee',
            available: 'available',
            back: 'Back',
            blankSelect: 'Select Something',
            cancel: 'Cancel',
            changeAvatar: 'Change Avatar',
            changePassword: 'Change Password',
            clear: 'Clear',
            close: 'Close',
            confirm: 'Confirm',
            continue: 'Continue',
            copy: 'Copy',
            create: 'Create',
            crud: {
                create: 'Create {activity}',
                update: 'Edit {item}',
                delete: 'Delete {item}'
            },
            currency: '{amount}{unit}',
            dateFrom: 'From',
            dateRange: 'By date range',
            dateTo: 'To',
            deactivate: 'Deactivate',
            delete: 'Delete',
            disabled: 'disabled',
            documentation: 'Click here for documentation',
            download: 'Download',
            dropFile: 'Drop file here or click to upload',
            edit: 'Edit',
            edited: 'Edited',
            email: 'Email',
            enabled: 'enabled',
            error: 'Error',
            fieldMissing: 'Please fill all fields to proceed',
            finish: 'Finish',
            help: 'Help',
            info: 'Information',
            invite: 'Invite',
            item: 'items | item | items',
            manage: 'Manage',
            more: 'More',
            na: 'N/A',
            name: 'Name',
            new: 'New',
            next: 'Next',
            no: 'No',
            none: 'None',
            ok: 'Ok',
            option: 'Option',
            phone: 'Phone',
            placeholders: {
                comment: 'Add a comment',
                noAssignee: 'Unassigned'
            },
            primary: 'Primary',
            print: 'Print',
            printLabel: 'Print Label',
            printProductTag: 'Print Product',
            quantity: 'Quantity',
            reset: 'Reset',
            resetTotp: 'Reset MFA',
            revert: 'Revert',
            save: 'Save',
            scaledPrice: 'Scaled Price',
            scalingPrice: 'Scaling Prices',
            search: 'Search',
            searchPlaceholder: 'Search by ID or name',
            selected: 'selected',
            send: 'Send',
            showAdvancedContext: 'Advanced',
            showFilters: 'Filters',
            skip: 'Skip',
            status: 'Status',
            submit: 'Submit',
            success: 'Success',
            swap: 'Swap',
            textCopied: 'Text copied to clipboard successfully',
            textFailedCopy: 'Text could not be copied at this time',
            unarchive: 'Unarchive',
            unnamed: 'Unnamed',
            unnamedYet: 'No name yet',
            update: 'Update',
            upload: {
                basic: 'Upload',
                csv: 'Upload CSV',
                photos: 'Upload Photos'
            },
            validateCode: 'Validate Code',
            view: 'View',
            viewLess: 'View Less',
            viewMore: 'View More',
            warning: 'Warning',
            yes: 'Yes'
        },
        filter: {
            filter: 'Filter',
            archived: 'Archived',
            assignee: 'Assignee',
            boolean: {
                true: 'Yes',
                false: 'No',
                unset: 'Both'
            },
            category: 'Category',
            categories: 'Categories',
            created: 'Created',
            date: 'Date',
            datePreset: {
                today: 'Today',
                yesterday: 'Yesterday',
                thisWeek: 'This Week',
                lastWeek: 'Last Week',
                thisMonth: 'This Month',
                lastMonth: 'Last Month',
                this3Month: 'This 3 Month',
                last3Month: 'Last 3 Month',
                this6Month: 'This 6 Month',
                last6Month: 'Last 6 Month',
                thisYear: 'This Year',
                lastYear: 'Last Year',
                thisQuarter: 'This Quarter',
                lastQuarter: 'Last Quarter',
                custom: 'Custom'
            },
            deliveryOption: 'Delivery Option',
            expireDate: 'Expire Date',
            featured: 'Featured',
            group: 'Group',
            isCustomProduct: '@.capitalize:generic.atomic.customTemplate',
            paid: 'Paid',
            price: 'Price',
            productCatalogs: 'Catalogs',
            publishDate: 'Publish Date',
            role: 'Role',
            search: 'Search',
            searchContactEmail: 'Contact Email',
            searchContactName: 'Contact Name',
            searchContactPhone: 'Contact Phone',
            searchSubjectName: 'Subject Name',
            session: '@.capitalize:generic.atomic.sessions | @.capitalize:generic.atomic.session | @.capitalize:generic.atomic.sessions',
            shippingGroups: 'Delivery Groups',
            status: 'Status',
            tags: 'Tags',
            title: 'Filters',
            typeTitle: 'Type',
            types: {
                contains: 'Contains',
                containsNot: 'Does Not Contain',
                is: 'Is',
                isNot: 'Is Not'
            },
            workflow: 'Workflow',
            placeholder: {
                group: 'Group',
                search: 'Search by ID or name',
                searchContactEmail: 'Contact email',
                searchContactName: 'Contact name',
                searchContactPhone: 'Contact phone',
                searchSubjectName: 'Subject name'
            }
        },
        tax: {
            gst: 'GST',
            qst: 'QST',
            pst: 'PST',
            hst: 'HST'
        },
        tollFree: 'Toll-Free',
        or: 'or',
        and: 'and',
        default: 'Default',
        prompt: {
            archive: 'Are you sure you want to archive {item}?',
            cancelTitle: 'Cancel changes',
            cancel: 'Are you sure you wish to cancel your current changes?',
            destructive: 'Are you sure you want to delete {item}?',
            warningTitle: 'Warning!',
            leavingWarningMessage: 'You are about to leave. Are you sure you want to exit this page?' +
                ' Progress will be lost.',
            requiredFieldTitle: 'Empty Required Fields',
            requiredField: 'Please fill in all required fields to proceed.'
        },
        province: 'Province',
        state: 'State',
        provinces: {
            qc: 'Quebec',
            on: 'Ontario',
            nl: 'Newfoundland And Labrador',
            pe: 'Prince Edward Island',
            ns: 'Nova Scotia',
            nb: 'New Brunswick',
            mb: 'Manitoba',
            sk: 'Saskatchewan',
            ab: 'Alberta',
            bc: 'British Columbia',
            yt: 'Yukon',
            nt: 'Northwest Territories',
            nu: 'Nunavut'
        },
        addressUnitTypes: {
            apartment: 'Apartment',
            office: 'Office',
            suite: 'Suite'
        },
        daysOfWeek: {
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
            sunday: 'Sunday'
        },
        shippingMethods: {
            fixedRate: 'Fixed Rate',
            canadaPost: 'Canada Post',
            pickUp: 'Pick-Up',
            establishment: 'Deliver to establishment'
        },
        units: {
            days: 'Days',
            grams: 'g',
            dollar: '$'
        }
    },

    login: {
        login: {
            header: 'Login',
            auth: {
                title: 'Authenticator',
                description: 'Enter the 6-digit code from your authenticator app'
            },
            linkForgotPassword: 'Forgot your password?',
            button: 'Log in',
            buttonContinue: 'Next'
        },
        changePassword: {
            codeMessage: 'A code has been sent to your email. Please enter it below.',
            placeholder: {
                email: 'name@email.com',
                code: '0000 0000',
                password: 'password'
            },
            title: 'Reset Password',
            newPassHeader: 'Enter your new password',
            emailHeader: 'Enter your email',
            codeHeader: 'Enter your reset code',
            instructions: 'A code will be sent to your email once the button is pressed. ' +
                'Please enter the code in the field that will appear here then you will be able' +
                ' to change your password.',
            emptyPassword: 'Please enter a password',
            sendCode: 'Send Code',
            shortPassword: 'Password must be more than {min} characters',
            passwordConfirmFailed: 'Those passwords didn’t match. Try again.',
            invalidCode: 'The code entered is invalid. Please review the code or request a new one.'
        },
        invite: {
            acceptInviteHeader: 'Accept the invitation',
            setAuthHeader: 'Setup Authenticator',
            setAuthMessage: 'To secure your account, please setup a Time-based One-Time Password (TOTP) using an' +
                ' authenticator app:',
            setAuthMessage2: 'This adds an extra layer of security to your account.',
            setAuthStep1: 'Download an authenticator app like Google Authenticator or Authy on your phone or tablet.',
            setAuthStep2: 'Scan the QR code displayed below with the app.',
            setAuthStep3: 'Enter the 6-digit code that appears on the app in the field below.',
            welcome: 'Welcome to',
            welcomeUser: 'Welcome {name}',
            totpFailed: 'The code you have entered is invalid. Please review the code on your authenticator app.',
            credentialsInvalid: 'The code entered is invalid. Please review the code or request a new one.'
        },
        password: {
            minLength: 'Must be at least {length} characters',
            lowerCase: 'Must contain at least {number} lower case characters',
            upperCase: 'Must contain at least {number} upper case characters',
            numbers: 'Must contain at least {number} numbers',
            symbols: 'Must contain at least {number} symbols',
            match: 'Passwords must match'
        },
        resetTotp: {
            instructions: 'Scan the QR code with your authenticator app and enter the code that will appear for' +
                ' this account in the field below.'
        }
    },

    subscriptionPlans: {
        standard: {
            name: 'standard'
        },
        advance: {
            name: 'advanced'
        },
        pro: {
            name: 'pro'
        },
        generic: {
            priceByMonth: '$ /Month',
            storageValue: 'GB of storage'
        }
    },

    order: {
        unassigned: 'Unassigned',
        status: {
            pending: 'Pending',
            'photo-processing': 'Photo Processing',
            'ready-to-print': 'Ready to Print',
            'printing-packaging': 'Printing & Packaging',
            'ready-to-ship': 'Ready to Ship',
            completed: 'Completed',
            'correction-requested': 'Correction Requested',
            cancelled: 'Cancelled'
        }
    }
}
