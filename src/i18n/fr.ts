/* eslint-disable quotes */
export const fr = {
    language: 'Français',
    lang: {
        en: 'En',
        fr: 'Fr'
    },
    langName: {
        en: 'Anglais',
        fr: 'Français',
        sp: 'Espagnol',
        de: 'Allemand',
        it: 'Italien',
        pt: 'Portugais'
    },

    test: {
        plural: 'Il n’y a pas de pomme | Il y a une pomme | Il y a {count} pommes'
    },

    page: {
        title: {
            backgroundPopularity: `Rapport d'utilisation des arrière-plans`,
            badRequest: 'Mauvaise requête',
            customProduct: 'Construisez votre forfait',
            backgrounds: 'Arrière-plans',
            backgroundCategories: `Catégories d'arrière-plans`,
            codePromo: 'Codes promotionnels',
            createSession: 'Création de session',
            crosssells: '@.capitalize:generic.atomic.crosssells',
            debug: 'Debug',
            forbidden: 'Interdit',
            forgotPassword: 'Mot de passe oublié',
            freeShipping: 'Livraison gratuite',
            internalServerError: 'Erreur interne de serveur',
            invite: `Confirmation d'invitation`,
            labelPrint: `Imprimer l'étiquette`,
            login: 'Connexion',
            logout: 'Déconnexion',
            manageSessions: 'Gérer les sessions',
            notFound: 'Introuvable',
            orders: 'Commandes',
            orderView: 'Voir la commande',
            orderPrint: 'Imprimer la commande',
            products: 'Produits',
            productCategories: 'Catégories de produits',
            productCatalogs: 'Catalogues',
            productThemes: 'Thèmes de produits',
            promo: 'Campagnes de codes promotionnels',
            reportSales: 'Rapport de ventes',
            shippingGroups: 'Groupes de livraison',
            shippingOptions: 'Options de livraison',
            subjects: 'Sujets',
            subjectGroups: 'Groupes de sujets',
            subjectCodeCreation: 'Création de code de sujet',
            unauthorized: 'Non-autorisé',
            welcome: 'Bienvenue',
            workflows: 'Flux de travail'
        }
    },

    headerMenu: {
        welcome: 'Bienvenue',
        profile: 'Profil',
        theme: 'Thème',
        locale: 'Langue',
        signOut: 'Se déconnecter',
        empty: 'C’est vide'
    },

    messages: {
        archiveError: 'Il y a eu une erreur lors de l’archivage',
        createError: 'Il y a eu une erreur lors de la création',
        deleteError: 'Il y a eu une erreur lors de la suppression',
        missingInputs: 'S’il-vous plaît remplir tous les champs obligatoires avant de procéder',
        missingWorkflow: 'S’il-vous plaît choisir un flux de travail avant de procéder',
        requestError: 'Il y a eu une erreur avec la requête',
        saveSuccess: 'Changements enregistrés',
        saveError: 'Il y a eu une erreur lors de l’enregistrement de vos changements',
        loadError: 'Il y a eu une erreur lors du chargement des données',
        invalidFields: 'Un ou plusieurs champs sont incorrect, veuillez verifier',
        uploadStarted: `Le téléchargement a commencé, vous pouvez continuer votre travail mais ne fermez ou` +
            ` rafraichisez pas l'onglet du fureteur, consultez les notifications pour plus d'informations`,
        csvNotMatch: 'S’il-vous-plaît choisir un fichier .csv',
        noWatermark: 'Vous devez configurer votre filigrane avant de continuer',
        offline: 'Vous êtes hors-ligne',
        unattendedLogout: 'Vous avez été déconnecté',
        passwordsDoNotMatch: 'Les mots de passe ne correspondent pas',
        passwordChanged: 'Mot de passe changé avec succès',
        passwordChangedError: 'Il y a eu une erreur lors du changement de mot de passe, veuillez réessayer plus tard',
        discountErrorTitle: 'Erreur d’option de rabais',
        discountErrorMessage: 'Vous devez sélectionner un catalogue de réductions pour utiliser l’option de' +
            ' réduction. Lors de l’utilisation de prix en échelle, assurez-vous que les prix réguliers et les prix' +
            ' réduits comportent le même nombre d’étapes.',
        storeNotConfigured: 'Votre boutique n’est pas configurée, veuillez configurer votre boutique avant de' +
            ' continuer',
        uniqueCCPaymentProcessorErrorTitle: 'Processeur de paiement de carte de crédit',
        uniqueCCPaymentProcessorErrorMessage: 'Vous ne pouvez avoir qu’un seul processeur de paiement de carte de' +
            ' crédit actif à la fois. Vous devez désactiver {app} avant d’activer {newApp}. Voulez-vous le' +
            ' remplacer par celui-ci maintenant?',
        digitalOptionsErrorTitle: 'Erreur d\'option numérique',
        digitalOptionsErrorMessage: 'Vous devez saisir un prix pour utiliser l\'option numérique.' +
            'Vous devez également saisir un prix si vous souhaitez utiliser des groupes digitaux.'
    },

    commonHeaders: {
        created: 'Créer',
        lastLogin: 'Dernière connexion'
    },

    activities: {
        tabsTitles: {
            appIntegration: 'Applications',
            backgroundCategories: 'Catégories',
            reportBackgroundUsage: 'Rapport d’utilisation d’arrière-plan',
            backgrounds: 'Arrière-plans',
            campaign: 'Code Promo',
            codePromo: 'Code Promo',
            changePlan: 'Changer de plan',
            createSession: 'Créer une session',
            crosssells: '@.capitalize:generic.atomic.crosssells',
            customProduct: '@.capitalize:generic.atomic.customTemplate',
            deactivateSubscription: 'Désactiver l’abonnement ',
            exposeCodeSnippet: 'Site web',
            freeShipping: 'Livraison gratuite',
            manageContactInfo: 'Coordonnées',
            manageSessions: 'Gérer les sessions',
            manageSubscription: 'Gérer l’abonnement',
            manageUsers: 'Gérer les utilisateurs',
            orders: 'Commandes',
            productCatalogs: 'Catalogues',
            productCategories: 'Catégories',
            productThemes: 'Themes',
            products: 'Produits',
            reportSales: 'Rapport de ventes',
            shippingGroups: 'Groupes de livraison',
            shippingOptions: 'Options de livraison',
            storeCustomization: 'Personnalisation',
            storeLanguages: 'Langues',
            storeStatus: 'Verrouillage',
            subjectCodeCreation: 'Création de codes',
            subjectGroups: 'Groupes de sujets',
            subjects: 'Sujets',
            subscriptionStatus: 'Statut d’abonnement',
            taxId: 'Taxes de ventes',
            workflows: 'Flux de travail'
        },
        titles: {
            dashboard: 'Tableau de bord',
            settings: 'Réglages',
            campaign: 'Marketing',
            configureStore: 'Boutique',
            backgrounds: 'Arrière-plans',
            groups: 'Groupes',
            integration: 'Intégration',
            management: 'Gestion',
            products: 'Produits',
            orders: 'Commandes',
            reports: 'Rapports',
            manageSessions: 'Sessions',
            shipping: 'Livraison',
            shippingGroups: 'Livraison',
            subjects: 'Sujets',
            subscription: 'Abonnement',
            userProfile: 'Profil',
            users: 'Utilisateurs',
            categories: 'Flux de travail',
            workflows: 'Workflows'
        },
        all: {
            internalNameExists: 'Ce @:generic.atomic.internalName existe déjà, veuillez en choisir un autre',
            internalNameUseWrongCharacters: 'Ce @:generic.atomic.internalName utilise des caractères qui ne sont pas autorisés.'
        },
        appIntegration: {
            title: 'Intégrations d’applications',
            description: 'Intégrez votre boutique à des applications tierces pour activer des fonctionnalités telles' +
                ' que l’expédition et le traitement des paiements. Vous devrez configurer au moins un processeur' +
                ' de paiement pour commencer à utiliser votre boutique.',
            appType: {
                shipping: 'Livraison',
                paymentProcessor: 'Processeur de paiement'
            },
            apps: {
                'canada-post': 'Poste Canada',
                elavon: 'Elavon',
                stripe: 'Stripe',
                chase: 'Chase'
            },
            general: {
                apiKey: 'Clé API',
                merchantId: 'ID Marchant',
                userId: 'ID Utilisateur',
                pin: 'NIP',
                apiPassword: 'Mot de passe',
                apiClientId: 'Identité de client',
                username: 'Nom d’utilisateur',
                signature: 'Signature',
                debug: 'Debug endpoint'
            },
            prompts: {
                deactivateAppTitle: 'Déactiver application',
                deactivateApp: 'Êtes vous sûr de vouloir déactiver {app}?'
            },
            canadaPost: {
                title: 'Postes Canada',
                description: 'Liez l’API de Postes Canada à votre boutique pour permettre à votre boutique de' +
                    ' calculer les frais d’expédition pour chaque transaction en fonction de l’emplacement de' +
                    ' l’utilisateur par rapport au vôtre.',
                infos: {
                    notice: 'Clé API pour la livraison avec Postes Canada',
                    explanation: 'Pictaccio peut utiliser l’interface de programmation d’application de' +
                        ' Postes Canada pour calculer le tarif de livraison basés sur votre emplacement' +
                        ' et celui de votre client.'
                },
                api: {
                    username: 'Nom d’utilisateur',
                    password: 'Mot de passe',
                    customerNumber: 'Numéro de client'
                }
            },
            elavon: {
                title: 'Elavon',
                description: 'Liez l’API Elavon à votre boutique pour permettre à votre boutique d’effectuer des' +
                    ' transactions par carte de crédit.',
                infos: {
                    notice: 'Clé API pour le traitement des paiements avec Elavon',
                    explanation: 'Pictaccio peut utiliser l’interface de programmation d’application Elavon pour' +
                        ' traiter en toute sécurité les différentes opérations de paiement' +
                        ' nécessaires à votre boutique.'
                }
            },
            paypal: {
                title: 'Paypal',
                description: 'Liez l’API de Paypal à votre boutique pour permettre d’effectuer des' +
                    ' transactions en utilisant la plateforme Paypal.',
                infos: {
                    notice: `Clé API Pour le traitement des paiements avec Paypal`,
                    explanation: 'Pictaccio peut utiliser l’API de Paypal pour' +
                        ' traiter en toute sécurité les différentes opérations de paiement' +
                        ' nécessaires à votre boutique.'
                }
            },
            stripe: {
                title: 'Stripe',
                description: 'Liez l’API de Stripe à votre boutique pour permettre d’effectuer des' +
                    ' paiements avec des cartes de crédit.',
                infos: {
                    notice: 'Clé API pour le traitement des paiements avec Stripe',
                    explanation: 'Pictaccio peut utiliser l’API de Stripe pour traiter en toute sécurité les' +
                        ' différentes opérations de paiement nécessaires à votre boutique.'
                },
                api: {
                    publishableKey: 'Publishable Key',
                    secretKey: 'Secret Key'
                }
            },
            tutorial: {
                whatIs: 'Intégrez des processeur de paiement, des gestionnaires d’expédition et des laboratoires' +
                    ' à votre flux de travail'
            }
        },
        backgrounds: {
            title: 'Arrière-plans',
            single: 'Arrière-plan',
            addBtn: 'Créer un Arrière-plan',
            add: {
                title: 'Créer un nouvel arrière-plan'
            },
            edit: {
                title: 'Modifier information d’{background}',
                reference: 'Référence',
                name: 'Nom',
                tags: 'Mots clés',
                image: 'Image',
                featured: 'En vedette'
            },
            productionIdentifierExists: 'Identifiant de production déjà utilisé, veuillez en choisir un autre.',
            productionIdentifierNoUnused: 'Nombre maximum de fonds atteint, Nous recommendons de supprimer ou éditer' +
                ' les fonds les moins populaires pour en ajouter de nouveaux. Nous limitons le nombre de fonds' +
                ' pour assurer une performance optimale.',
            tutorial: {
                whatIs: 'Donnez la possibilité à vos clients de choisir un arrière-plan pour leurs photos sur fond vert',
                addBtn: 'Cliquez ici pour créer un nouveau fond'
            }
        },
        backgroundCategories: {
            title: 'Catégories',
            single: 'Catégorie d’arrière-plan',
            addBtn: 'Créer une catégorie d’arrière-plan',
            tutorial: {
                whatIs: 'Présentez vos arrière-plans à vos clients dans des catégories organisées',
                addBtn: 'Cliquez ici pour créer une nouvelle catégorie d’arrière-plan'
            }
        },
        backgroundPopularity: {
            title: 'Popularité d’arrière-plan'
        },
        billingPayment: {
            generic: {
                messages: {
                    noProblem: 'Aucun problème!'
                }
            }
        },
        storeCustomization: {
            brandingLogoLabel: 'Logo',
            brandingFaviconLabel: 'Favicon',
            brandingSignatureLabel: 'Signature',
            color: {
                accent: 'Accent',
                background1: 'Fond 1',
                background2: 'Fond 2',
                background3: 'Fond 3',
                importantBackground1: 'Fond important 1',
                importantBackground2: 'Fond important 2'
            },
            invalidUrl: 'URL invalide, veuillez entrer une URL valide',
            selectColor: 'Couleurs de la boutique',
            setStoreName: 'Nom de la boutique',
            setUrls: 'URLs externes',
            title: 'Personalization',
            tutorial: {
                whatIs: 'Personnalisez l’apparence de votre boutique pour l’harmoniser à vos couleurs'
            },
            uploadImages: 'Téléverser les images',
            uploadLogo: 'Logo',
            uploadLogoError: 'ERREUR: Les fichier qui ne sont pas de type SVG/PNG/JPG ne sont pas accepter.',
            uploadWatermark: 'Filigrane',
            urls: {
                contact: 'Contactez-nous',
                root: 'Votre site web',
                termsAndConditions: 'Conditions d’utilisation'
            }
        },
        customProduct: {
            title: 'Construisez votre forfait',
            single: 'Forfait personnalisé',
            addBtn: 'Créer un forfait personnalisé',
            tutorial: {
                whatIs: 'Offrez à vos clients de la flexibilité lors de la sélection de leurs produits. Les produits' +
                    ' @:generic.atomic.customTemplates leur offrent un certain nombre de choix à sélectionner pour un prix fixe',
                addBtn: 'Cliquez ici pour créer un nouveau @.capitalize:generic.atomic.customTemplate'
            }
        },
        changePlan: {
            choosePlan: 'Choisir un forfait',
            currentPlan: 'Forfait actuel'
        },
        campaign: {
            single: 'Campagne',
            addBtn: 'Créer une campagne',
            main: {
                prefix: 'Préfix',
                amount: 'Montant',
                created: 'Créé',
                modified: 'Modifié'
            },
            tutorial: {
                whatIs: 'Générez un nombre illimité de codes promotionnels, tous organisés en campagnes',
                addBtn: 'Cliquez ici pour créer une nouvelle campagne'
            },
            dialog: {
                restrictionSection: 'Restrictions'
            }
        },
        createSession: {
            title: 'Créer une session',
            breadcrumb: {
                sessionInfo: 'Information',
                productSection: 'Produits',
                shippingSection: 'Livraison',
                subjects: 'Sujets',
                photos: 'Photos',
                groups: 'Groupes'
            },
            sessionInfo: {
                multipleColor: 'Plusieurs couleurs',
                sessionName: 'Nom de session',
                sessionDate: 'Publier le',
                sessionDates: 'Dates de session',
                sessionExpirationDate: 'Expire le',
                crosssell: '@.capitalize:generic.atomic.crosssell',
                colorSelector: 'Couleur de session',
                colorExplanation: 'Cette couleur est affichée sur les copies imprimées d’une commande et sert à ' +
                    'rapidement identifier à quelle session elle appartient.',
                colorExplanationTitle: 'Que sont des couleurs de session?',
                colorSuggestion: 'Suggestion de couleurs'
            },
            options: {
                autosend: 'Envoyer les photos digitales automatiquement',
                crosssell: '@.capitalize:generic.atomic.crosssell',
                digitals: 'Copies digitales',
                digitalsExplanation: `L'activation des copies digitales sur cette session permettra à vos clients` +
                    ` d'acheter une copie digitale des photos sélectionnées.`,
                digitalsAutoSendingExplanation: `La photo demandée en copie digitale peut être envoyée dès la` +
                    ` commande finalisée si aucune retouche n'est sélectionnée et si l'option est activée.`,
                digitalsAllowGroupsExplanation: 'Vos clients peuvent acheter des copies digitales des photos de' +
                    ' groupe si l\'option est activée',
                digitalsExplanationTitle: 'Digitales',
                digitalsAutoSendingExplanationTitle: 'Envois automatique de digitales',
                digitalsAllowGroupsExplanationTitle: 'Copies digitales de groupes',
                discountCatalog: 'Catalogue de rabais',
                discountCatalogPlaceholder: '(Choisissez un catalogue)',
                discount: 'Rabais',
                discountExplanationTitle: 'Rabais pour les produits digitals',
                discountExplanation: 'Activez cet option pour permettre d\'offrir des rabais lorsque' +
                    ' certains produits sont ajoutés au panier. Pour utiliser cette fonction, vous devez' +
                    ' d\'abord créer un catalogue de produits avec les produits que vous voulez utiliser pour le' +
                    ' rabais. Les rabais défini ici sont enlevés sur total des produits digitals',
                digitalsDiscount: 'Rabais pour les produits digitals',
                groupDigitalsDiscount: 'Rabais pour les copies digitales de groupes',
                groupDigitals: 'Copies digitales de groupes',
                digitalsPrice: 'Prix pour sujets',
                digitalGroupsPrice: 'Prix pour groupes',
                title: 'Options',
                touchups: 'Retouches',
                touchupsExplanation: `L'activation des retouches sur cette session permettra à vos clients de demander` +
                    ` des modifications à une photo moyennant les frais sélectionnés.`,
                touchupsExplanationTitle: 'Retouches',
                touchupsPrice: 'Prix pour retouches',
                crosssellExplanation: 'Choisissez une option de @:generic.atomic.crosssell pour offrir à votre' +
                    ' clientèle des suggestions de produits durant la navigation vers la page de confirmation de' +
                    ' commande.',
                crosssellExplanationTitle: 'Maximisez vos ventes avec la @:generic.atomic.crosssell',
                workflowExplanation: 'Ceci est utilisé pour organiser les sessions dans un secteur de la ' +
                    'photographie (École, Garderie, Sport, etc.)',
                workflowExplanationTitle: 'Organizez vos sessions avec les flux de travail',
                workflow: 'Flux de travail'
            },
            groups: {
                emptyList: 'Cette section est vide, ajoutez un item ici',
                shippingGroupsHelper: 'Sélectionnez les groupes de livraison que vous voulez rendre disponibles' +
                    ' dans cette session. Seules les options de ces groupes seront présentés à vos clients pour' +
                    ' cette session.',
                productCatalogsHelper: 'Sélectionnez des catalogues pour assigner des produits à la session. Seulement' +
                    ' les produits de ces catalogues seront présentés à vos clients pour cette session.'
            },
            shippingSection: {
                baseShippingGroup: 'Groupe d’expédition de base',
                baseShippingGroupExplanation: 'Créera une copie du groupe sélectionné et ajoutera l’option' +
                    ' d’expédition qui sera créée ci-dessous.',
                copyLabel: 'Créer un nouveau groupe d’option de livraison en utilisant les items du group {group}' +
                    ' et ajoutera une option de Livraison à l’établissement.<br><br>Le nouveau groupe contiendra les' +
                    ' options suivantes en plus de l’option de Livraison à l’établissement: {items}<br><br>Le' +
                    ' nouveau groupe sera nommé {name}',
                copyLabelEmpty: 'Aucun groupe sélectionné',
                copyPromptEmpty: 'Voulez-vous créer une copie de {group1} ? {group2} sera créé.',
                copyPromptEmptyTitle: 'Copier sans modification?',
                copyPromptNoSelection: 'Veuillez sélectionner un groupe à copier',
                price: 'Prix',
                shippingGroupName: '@.capitalize:generic.atomic.internalName',
                shippingOptionName: '@.capitalize:generic.atomic.internalName',
                shippingOptionNames: 'Noms des options d’expédition',
                timeline: 'Ajouter un retour à l’établissement',
                copyOptionSuffix: 'Retour à {establishment}',
                copyGroupSuffix: '{establishment} groupe',
                finishCopy: 'Créer groupe'
            },
            importCsv: {
                title: 'Importer CSV',
                instructions: `Sélectionnez un CSV en cliquant sur l'icône de téléchargement, puis faites` +
                    ` correspondre les colonnes aux types d'informations pris en charge. Cela permet à toutes les` +
                    ` fonctionnalités de l’application de se comporter correctement. Les noms et codes sont requis.` +
                    ` Groupe permet à l'application d'attribuer des photos à des groupes et des groupes à des sujets.` +
                    ` Des identifiants uniques permettent d'automatiser la demande de code effectuée par vos clients.`,
                firstName: 'Prénom',
                lastName: 'Nom',
                group: 'Groupe',
                uid: 'ID unique',
                code: 'Code',
                emptyDropdown: 'Importez un csv en premier',
                prompts: {
                    existingCodesTitle: 'Codes existants',
                    existingCodes: 'Notez que certains codes dans le csv sont déjà utilisés, veuillez vérifier' +
                        ' et réessayer.',
                    oneExistingCodes: 'Le code suivant est déjà utilisé: {codes}',
                    fewExistingCodes_other: 'Les codes suivant sont déjà utilisés: {codes}',
                    moreExistingCodes: 'Les codes suivants sont déjà utilisés: {codes} et {count} autres',
                    invalidCodesTitle: 'Codes invalides',
                    invalidCodes: 'Le csv contient des codes invalides, veuillez vérifier et réessayer',
                    noData: 'Aucune donnée n’a été trouvée, veuillez importer un fichier csv valide et attribuez' +
                        ' les colonnes correctement',
                    noDataTitle: 'Aucune donnée',
                    invalidColumnsTitle: 'Colonnes invalides',
                    invalidColumns: 'Le csv ne contient pas les colonnes requises, veuillez vérifier et réessayer.'
                },
                warnings: {
                    existingCodes: 'Notez que certains codes dans le csv sont déjà utilisés, veuillez vérifier' +
                        ' et réessayer.',
                    invalidCodes: 'Le csv contient des codes invalides, veuillez vérifier et réessayer',
                    noData: 'Aucune donnée n’a été trouvée, veuillez importer un fichier csv valide et attribuez' +
                        ' les colonnes correctement'
                }
            },
            validateCsvPhotos: {
                headers: {
                    name: 'Sujet',
                    group: 'Groupe',
                    code: 'Code',
                    photo: 'Photo'
                }
            },
            importPhotos: {
                callToAction: 'Déposez vos photos en dessous ou cliquez&nbsp;<u>ici</u>&nbsp;pour' +
                    ' parcourir vos fichiers',
                unmatchedImages: '0/{total} photo ne correspond pas à un code ou à un groupe |' +
                    ' 1/{total} photo ne correspond pas à un code ou à un groupe |' +
                    ' {n}/{total} photos ne correspondent pas à un code ou à un groupe',
                unmatchedSubjects: '0/{total} sujet n’a pas d’image associée |' +
                    ' 1/{total} sujet n’a pas d’image associée |' +
                    ' {n}/{total} sujets n’ont pas d’image associée',
                unmatchedGroups: '0/{total} groupe n’a pas d’image associée\n |' +
                    ' 1/{total} groupe n’a pas d’image associée\n |' +
                    ' {n}/{total} groupes n’ont pas d’image associée\n'
            },
            preview: {
                groupTitle: 'Groupes',
                subjectTitle: 'Sujets',
                unknownName: 'Nom inconnu'
            },
            notification: {
                title: 'Téléversement de session'
            }
        },
        crosssells: {
            single: '@.capitalize:generic.atomic.crosssell',
            addBtn: 'Créer une @:generic.atomic.crosssell',
            prompt: {
                deleteTitle: 'Effacer @:generic.atomic.crosssell'
            },
            tutorial: {
                whatIs: 'Incitez vos clients avec des produits qu’ils n’ont peut-être pas vu juste avant de passer' +
                    ' à la caisse',
                addBtn: 'Cliquez ici pour créer une nouvelle @:generic.atomic.crosssell'
            }
        },
        dashboard: {
            welcome: `Bienvenue {name}`,
            storeSetup: {
                skipForNow: 'Ignorer',
                skipForever: 'Ignorer pour toujours',
                title: 'Terminez la configuration de votre boutique',
                progress: 'complété',
                steps: {
                    appIntegration: {
                        name: 'Appliquez vos intégrations d’application',
                        link: 'Ouvrir les intégrations d’application',
                        description: 'Ceci permettra à votre boutique de prendre des paiements, ' +
                            'calculer la livraison, etc.'
                    },
                    customizeStore: {
                        name: 'Personnalisez votre boutique',
                        link: 'Ouvrir la personnalisation de la boutique',
                        description: 'Ceci vouss permettra d’appliquer vos couleurs de marque et votre logo à votre' +
                            ' boutique en ligne.'
                    },
                    languages: {
                        name: 'Appliquez vos langues de la boutique',
                        link: 'Ouvrir les langues de la boutique',
                        description: 'Choisissez quels langues seront utilisées sur votre boutique.'
                    },
                    contact: {
                        name: 'Appliquez vos informations de contact',
                        link: 'Ouvrir les informations de contact',
                        description: 'Appliquez votre adresse postale, numéro de téléphone et courriel de la boutique.'
                    },
                    taxId: {
                        name: 'Appliquez vos informations fiscales',
                        link: 'Ouvrir les informations fiscales',
                        description: 'Configurez votre numéro d’identification fiscal'
                    },
                    inviteUsers: {
                        name: 'Optionnel: inviter des utilisateurs',
                        link: 'Ouvrir les utilisateurs',
                        description: 'Invitez votre équipe à travailler sur votre boutique.'
                    },
                    integration: {
                        name: 'Intégrez votre boutique sur votre site web',
                        link: 'Ouvrir l’extrait de code',
                        description: 'Redirigez vos clients à votre boutique à travers votre site web.'
                    },
                    products: {
                        name: 'Créez des produits',
                        link: 'Ouvrir les produits',
                        description: 'Commencez à populer votre boutique avec des produits.'
                    },
                    sessions: {
                        name: 'Créez votre première session',
                        link: 'Ouvrir la création de session',
                        description: 'Commencez à utiliser votre boutique en créant une session permettant à vos ' +
                            'clients d’acheter leurs photos.'
                    }
                }
            }
        },
        exposeCodeSnippet: {
            title: 'Extrait de code',
            description: 'Copiez ces extraits de code dans votre propre site Web pour intégrer une zone de saisie de' +
                ' code de sujet et permettre à vos sujets d’être redirigés vers la page des produits.',
            label: {
                head: 'Placer en "head"',
                body: 'Placer en "body"'
            },
            messages: {
                copySuccess: 'Code copié au presse-papier avec succès!'
            }
        },
        freeShipping: {
            title: 'Livraison gratuite',
            confirmTitle: 'Éditer la promo de livraison gratuite',
            confirmMessage: 'Êtes-vous sûr de vouloir éditer la promo de livraison gratuite?',
            description: 'Offrez la livraison gratuite à vos clients en fixant un montant seuil. Cela les encouragera' +
                ' à dépenser davantage dans votre boutique. La promotion est actuellement de' +
                ' <b style="color: {promoStatusColor}">{promoStatus}</b>. ' +
                'Les commandes avec un sous-total dépassant le montant du seuil bénéficieront de la livraison' +
                ' gratuite.',
            enable: 'Activer',
            threshold: 'Montant de seuil',
            after: 'Sur les commandes de plus de ',
            notice: 'Activer Exoédition gratuite en sélectionnant un montant de seuil',
            thresholdExplanation: `Ce seuil sert à appliquer la livraison gratuite lorsqu'une commande dépasse le` +
                ` montant indiqué.`,
            thresholdExplanationTitle: 'Appliquez une livraison gratuite',
            tutorial: {
                whatIs: 'Remerciez vos gros clients, fixez un seuil et offrez-leur la livraison gratuite'
            }
        },
        manageContactInfo: {
            title: 'Gérer les coordonnées',
            infos: {
                notice: 'Ces informations seront visibles par vos clients à différents endroits sur votre boutique.'
            },
            updatePhone: {
                title: 'Numéro de téléphone',
                _main: 'Principal'
            },
            updateAddress: {
                title: 'Adresse',
                ui: {
                    addressLine1: 'Adresse ligne 1',
                    addressLine2: 'Adresse ligne 2',
                    addressUnit: 'Unité',
                    addressPostalCode: 'Code postal',
                    addressCountry: 'Pays',
                    addressProvince: 'Province',
                    addressCity: 'Ville'
                }
            },
            updateEmail: {
                title: 'Courriels',
                '_customer-service': 'Service à la clientèle',
                _notifications: 'Notifications'
            }
        },
        manageSessions: {
            title: 'Gérer les sessions',
            single: 'Session',
            addBtn: 'Créer une session',
            seeSubjects: 'Sujects et groupes',
            hints: {
                goToWorkflow: 'flux de travail',
                noWorkflow: `Aucun flux de travail n'a encore été créé, rendez-vous sur la page workflow située` +
                    ` dans le menu latéral pour créez-en un.`
            },
            tutorial: {
                whatIs: 'Organisez vos shootings en sessions, où vous pourrez personnaliser le contenu accessible à' +
                    ' vos clients',
                addBtn: 'Cliquez ici pour créer une nouvelle session',
                addBtnNoWatermark: 'C’est ici que vous créeriez vos sessions, mais vous devez d’abord faire un' +
                    ' détour dans les paramètres pour configurer votre filigrane. Ceci assure que vos photos seront' +
                    ' toujours publiées avec votre filigrane.',
                seeSubject: 'Cliquez sur l’icône en forme d’œil pour voir les sujets de chaque session',
                settingsNoWatermark: 'Ouvrez les paramètres pour configurer votre filigrane'
            }
        },
        subjectGroups: {
            title: 'Groupes de {session}',
            single: 'Groupe',
            addBtn: 'Ajouter un groupe',
            tutorial: {
                whatIs: 'Gérer et vendre des photos de groupe associées au bon sujet',
                addBtn: 'Cliquez ici pour créer un nouveau groupe pour la session en sélectionée'
            }
        },
        subjects: {
            title: 'Sujets de {session}',
            single: 'Sujet',
            addBtn: 'Ajouter un sujet',
            swapSubject: 'Échanger photos de sujets',
            tutorial: {
                whatIs: 'Gérez ici les informations et les photos de tous les sujets de la session sélectionnée',
                addBtn: 'Cliquez ici pour créer un nouveau sujet'
            }
        },
        manageSubscription: {
            cancelSubscription: {
                title: 'Annuler l’abonnement',
                shortNotice: 'Vous pouvez cesser d’utiliser nos services à tout moment.',
                ui: {
                    confirmSendButton: 'Confirmer et envoyer',
                    improvement: 'Comment pouvons-nous améliorer Pictaccio?'
                },
                notice: 'Votre abonnement sera annulé à la fin du mois facturé.',
                confirm: 'Pour confirmer la désactivation, veuillez entrer -CONFIRMER- dans la case suivante.'
            },
            updateCC: {
                title: 'Mettre à jour la carte de crédit',
                ui: {
                    cardNumber: 'Numéro de carte',
                    cardName: 'Nom sur la carte',
                    cardExpiration: 'Date d’expiration',
                    cardCVV: 'CSC de carte'
                },
                currentCC: 'Carte se terminant par: ',
                expire: 'Expire le: '
            }
        },
        manageUsers: {
            title: 'Gérer les utilisateurs',
            single: 'Utilisateur',
            addBtn: 'inviter un utilisateur',
            toast: {
                error: 'Il y a eu une erreur lors de l\'opération utilisateur, veuillez réessayer plus tard',
                inviteSuccess: 'Invitation envoyée avec succès',
                editSuccess: 'Utilisateur mis à jour avec succès'
            },
            add: {
                title: 'Inviter un utilisateur'
            },
            edit: {
                title: 'Modifier les informations de {user}',
                firstName: 'Prénom',
                lastName: 'Nom',
                email: 'Courriel',
                inviteExpirationWarning: 'L’invitation envoyé à l’utilisateur expirera après 24 heures.',
                roles: 'Rôles',
                placeholderRole: '(Choisissez un rôle)',
                resetPassword: 'Réinitialiser le mot de passe',
                resetTotp: 'Réinitialiser 2FA'
            },
            help: {
                title: 'Niveau d’accès des rôles'
            },
            headers: {
                name: 'Utilisateurs',
                roles: 'Roles',
                status: 'État',
                access: 'Accès'
            },
            roles: {
                superAdmin: 'Super Administrateur',
                admin: 'Administrateur',
                customerService: 'Service à la clientèle',
                productManager: 'Gestionnaire de produits',
                reportViewer: 'Visualiseur de rapports',
                productionManager: 'Gestionnaire de production',
                sessionManager: 'Gestionnaire de session'
            },
            activities: {
                seePromoCode: 'Voir code promo',
                createPromoCode: 'Créer code promo',
                editOrders: 'Éditer commandes',
                deleteOrders: 'Effacer commandes',
                createSession: 'Créer session',
                seeSessions: 'Voir sessions',
                deleteSessions: 'Effacer sessions',
                editStore: 'Éditer boutique'
            }
        },
        orders: {
            title: 'Commandes',
            bulkPrintOrder: 'Imprimer les commandes',
            bulkPrintOrderNoSelectionTitle: 'Aucune sélection',
            bulkPrintOrderNoSelectionMessage: 'Veuillez sélectionner au moins une commande pour imprimer vos commandes',
            bulkPrintLabel: 'Imprimer les étiquettes d’expéditions',
            bulkPrintLabelNoSelectionTitle: 'Aucune sélection',
            bulkPrintLabelNoSelectionMessage: 'Veuillez sélectionner au moins une commande pour imprimer' +
                ' vos étiquettes',
            exportContactsNormal: 'Exporter les contacts (Normal)',
            exportContactsExcel: 'Exporter les contacts (Excel)',
            exportContactsNoSelectionTitle: 'Aucune sélection',
            exportContactsNoSelectionMessage: 'Veuillez sélectionner au moins une commande pour exporter les contacts',
            tutorial: {
                whatIs: 'Retrouvez toutes vos commandes ici',
                assignTask: 'Cliquez ici pour attribuer la commande à un membre de votre équipe'
            }
        },
        printOrder: {
            info: {
                address: "Adresse",
                companyName: "Nom de Compagnie",
                date: "Date",
                email: "Courriel",
                phone: "Téléphone",
                sessionColor: "Couleur de Session"
            }
        },
        products: {
            title: 'Produits',
            single: 'Produit',
            addBtn: 'Créer un produit',
            tutorial: {
                whatIs: 'Vendez des produits flexibles comme des @:generic.atomic.customTemplates ou des produits thématiques' +
                    ' à vos clients',
                addBtn: 'Click here to create a new product'
            }
        },
        productThemes: {
            title: 'Thèmes',
            single: 'Ensemble de thèmes',
            addBtn: 'Créer un ensemble de thèmes',
            tutorial: {
                whatIs: 'Créez des ensembles de thèmes pour permettre une variation thématique sur vos produits',
                addBtn: 'Cliquez ici pour créer un nouvel ensemble de thèmes'
            },
            prompt: {
                update: 'Certains produits peuvent utiliser cet ensemble de thèmes. L\'archivage d\'images' +
                    ' enverra une notification pour indiquer quels produits ont des images manquantes. ' +
                    'Souhaitez-vous archiver les images associées ?'
            }
        },
        productCategories: {
            title: 'Catégories de produits',
            single: 'Catégorie de produits',
            addBtn: 'Créer une catégorie',
            tutorial: {
                whatIs: 'Présentez vos produits dans des catégories comme forfaits ou idées cadeaux. Ils seront ' +
                    'groupés ensemble sur votre magasin pour que vos clients puissent mieux le naviguer.',
                addBtn: 'Cliquez ici pour créer une nouvelle catégorie de produits'
            }
        },
        productCatalogs: {
            title: 'Catalogues',
            single: 'Catalogue',
            addBtn: 'Créer un catalogue',
            prompts: {
                missingValueMessage: 'Veuillez remplir tous les champs de nom et sélectionner au moins 1 produit',
                missingValueMessageProduct: 'Veuillez remplir tous les champs de nom',
                missingValueTitle: 'Valeurs manquantes'
            },
            tutorial: {
                whatIs: 'Les catalogues permettent de présenter différents produits à vos clients en fonction des' +
                    ' catalogues attribués à chaque session',
                addBtn: 'Cliquez ici pour créer un nouveau catalogue'
            }
        },
        promoCodes: {
            title: 'Codes promo',
            single: 'Code promo',
            addBtn: 'Générer des codes promo',
            messages: {
                codeCreationFailed: 'Il y a eu une erreur lors de la création des codes promo, veuillez réessayer' +
                    ' plus tard'
            },
            tutorial: {
                whatIs: 'Créez des codes promo pour vos clients pour les encourager à acheter plus de produits',
                addBtn: 'Cliquez ici pour générer de nouveaux codes promo'
            }
        },
        sales: {
            title: 'Ventes'
        },
        shippingGroups: {
            title: 'Groupes de livraison',
            single: 'Groupe de livraison',
            addBtn: 'Créer un groupe de livraison',
            tutorial: {
                whatIs: 'Attribuez rapidement des options de livraisons à chaque session avec des groupes de livraisons',
                addBtn: 'Cliquez ici pour créer un nouveau groupe de livraison'
            }
        },
        shippingOptions: {
            title: 'Options de livraison',
            single: 'Option de livraison',
            addBtn: 'Créer une option de livraison',
            options: {
                publishDate: 'Date de publication',
                publishDateHelp: 'Date de publication de la session, à partir de laquelle vos clients pourront' +
                    ' commander leurs photos.',
                expirationDate: 'Date d’expiration',
                expirationDateHelp: 'Date d’expiration de la session, après laquelle vos clients ne pourront plus' +
                    ' faire de nouvelles commandes.',
                productCode: `Service d'envoi`,
                productCodeExplanation: `Type de livraison offert par Postes Canada pour cette option de livraison` +
                    ` (Priorité, Xpresspost ou Colis Standard)`,
                canadaPost: {
                    expedited: 'Colis accéléré',
                    priority: 'Priorité',
                    regular: 'Colis Standard',
                    xpressPost: 'Xpresspost'
                },
                envelopePrice: 'Prix d’enveloppe',
                envelopePriceExplanation: `Cela remplacera le prix de l’option d’expédition si le poids de la commande` +
                    ` du client est inférieur au poids spécifié dans « Limite de poids de l’enveloppe ».`,
                originPostalCode: 'Code postal d’origine',
                parcelThreshold: 'Limite de poids pour enveloppe',
                parcelThresholdExplanation: `Poids (g) où les produits ne seront plus envoyés par lettre mais plutôt` +
                    ` par colis. Entrez "0" pour que les produits soient toujours envoyés en tant que colis.`,
                envelopeEta: 'Délais de transit pour enveloppe',
                envelopeEtaExplanation: 'Estimation du délai de livraison d’une enveloppe.',
                contactName: 'Nom du contact',
                contactAddress: 'Adresse civique du ramassage',
                daysAvailable: 'Jours disponibles',
                contactPhone: 'Téléphone du contact',
                lateFees: 'Frais de retard',
                lateFeesHelp: 'Choisissez les frais à appliquer aux commandes passées après la date de retard',
                expireDate: 'Date de désactivation',
                expireDateHelp: 'Après cette date, cette option sera désactivée. Par exemple, si un client tente de passer une commande après cette date, l\'option d\'envoyer à l\'école ne serait plus disponible.',
                increaseDate: 'Date de retard',
                increaseDateHelp: 'Des frais de retard seront appliqués aux commandes passées après cette date.',
                etaDate: 'Date d’arrivée',
                etaDateHelp: 'Date à laquelle les commandes doivent parvenir à l’établissement. Par exemple, la date' +
                    ' à laquelle les commandes seront reçues par l’école et seront distribuées aux élèves.'
            },
            tutorial: {
                whatIs: 'Donnez à vos clients le choix de la manière dont ils recevront leur commande, que vous' +
                    ' l’expédiiez ou qu’ils viennent la chercher',
                addBtn: 'Cliquez ici pour créer une nouvelle option de livraison'
            }
        },
        storeLanguages: {
            title: 'Langues de la boutique',
            availableLanguagesDescription: 'Sélectionnez les langues que vous souhaitez mettre à la disposition de' +
                ' vos clients. Glissez la langue dans la liste pour changer la priorité des langues, la première' +
                ' sera considérée comme la langue principale et utilisée comme langue par défaut.'
        },
        storeStatus: {
            publicInfos: {
                title: 'Informations publiques',
                phone: {
                    title: 'Numéros de téléphone'
                },
                address: {
                    title: 'Adresse postale'
                }
            },
            storeAvailability: {
                title: 'Disponibilité de la boutique',
                label: 'La boutique est actuellement',
                status: {
                    open: 'Ouverte',
                    closed: 'Fermée'
                },
                button: {
                    open: 'Réactiver',
                    close: 'Fermer'
                },
                prompt: {
                    title: '{action} votre boutique',
                    message: `Vous êtes sur le point de {action} votre boutique. ` +
                        `{showMessage}` +
                        `Êtes vous sûr que vous voulez continuer?`,
                    shutdownMessage: `Vos clients vont voir ce message lorsqu'ils accéderont votre boutique: ` +
                        `<div class="prompt-user-string">{message}</div>`
                },
                configuration: {
                    description: 'Vous devez compléter la configuration de votre boutique avant l\'ouverture.' +
                        ' Pour ce faire, naviguez dans les sections notées ci-dessus et complétez les étapes.',
                    configured: 'Configuré',
                    notConfigured: 'Non configuré',
                    contact: 'Contact de la boutique',
                    customization: 'Personalisation de la boutique',
                    languages: 'Langues de la boutique',
                    payment: 'Processeurs de Paiement',
                    taxes: 'Taxes de vente'
                }
            }
        },
        subjectCodeCreation: {
            title: 'Génération de code de sujets',
            toolDescription: 'Cet outil peut être utilisé pour générer des codes qui sont garantis uniques à votre' +
                ' environnement.',
            characterSet: {
                title: 'Jeu de caractères',
                description: 'Seuls ces caractères seront utilisés pour générer les codes de sujet.',
                alphaNumeric: 'Alphanumérique',
                alphaNumericAlikeless: 'AlphaNumérique avec sosie supprimé',
                numeric: 'numérique',
                custom: 'Personnaliser',
                customPreview: 'Jeu de caractères personnalisé',
                preview: 'Aperçu',
                selection: 'Sélection'
            },
            prefix: {
                title: 'Préfixe',
                description: 'Tous les codes seront précédés de ce texte.'
            },
            length: {
                title: 'Longueur'
            },
            numberToGenerate: {
                title: 'Nombre de codes à générer',
                maxCountExceeded: 'La quantité de codes demandée dépasse la limite. Veuillez réduire le nombre de' +
                    ' codes à générer ou augmenter la longueur des codes.'
            },
            btn: 'Générer et copier',
            tutorial: {
                whatIs: 'Générez un code unique pour identifier correctement chaque sujet'
            }
        },
        subscriptionStatus: {
            currentSubscription: {
                title: 'Abonnement en cours',
                memberSince: 'Membre depuis',
                renewDate: 'Date de renouvellement'
            },
            billingPayment: {
                title: 'Facturation et paiement',
                nextBillingDate: 'Prochaine date de facturation',
                datePaid: 'Date de paiement'
            }
        },
        taxId: {
            title: 'Gérer le numéro d’identification fiscale',
            manage: {
                ui: {
                    taxName: 'Acronyme fiscal',
                    taxId: 'Numéro d’identification fiscale',
                    taxValue: 'Taux d’imposition',
                    legendFederal: 'Fédéral',
                    legendProvincial: 'Provincial',
                    legendState: 'Province'
                },
                taxInfo: {
                    title: 'Informations d’identification fiscale',
                    federalId: 'numéro d’identification fiscale fédéral: ',
                    provincialId: 'numéro d’identification fiscale provincial: '
                },
                taxValue: {
                    title: 'Taux d’imposition'
                },
                infos: {
                    notice: ``,
                    explanation: 'Sélectionnez votre province d’exploitation à des fins fiscales. Ceci sera utilisé' +
                        ' pour calculer les taxes sur votre boutique.'
                }
            }
        },
        userProfile: {
            changeUserName: 'Canger le nom d’utilisateur',
            cities: {
                edmonton: 'Edmonton',
                halifax: 'Halifax',
                iqaluit: 'Iqaluit',
                montreal: 'Montréal',
                regina: 'Regina',
                saintJohn: 'Saint-Jean de Terre-Neuve',
                toronto: 'Toronto',
                vancouver: 'Vancouver',
                whitehorse: 'Whitehorse',
                winnipeg: 'Winnipeg',
                yellowknife: 'Yellowknife'
            },
            date: {
                yMD: 'Année/Mois/Jour',
                dMY: 'Jour/Mois/Année',
                mDY: 'Mois/Jour/Année'
            },
            inputFirstName: 'Prénom',
            inputLastName: 'Nom',
            inputEmail: 'Courriel',
            inputTimeZone: 'Fuseau horaire',
            inputTimeFormat: 'Format de temps',
            inputDateFormat: 'Format de date',
            inputPassword: 'Mot de Passe',
            inputPasswordConfirm: 'Confirmer le mot de passe',
            resetTotpHelp: `Réinitialisez l'authentication à facteurs multiples pour votre profil, en balayant un` +
                `code QR pour recevoir un nouveau code à utiliser pour vous connecter à votre profil`,
            resetPasswordHelp: `Lorsque vous cliquez sur ce bouton, vous recevrez un courriel à l'adresse courriel` +
                ` enregistrée sur le profil, contenant un code. Entrez ce code dans la boîte de texte dans la` +
                ` fenêtre suivante pour réinitialiser votre mot de passe.`,
            relativeTimestamps: 'Utiliser l’horodatage relatif lorsque possible',
            roles: 'Rôles',
            messages: {
                validateResetTotpFailed: 'La validation de votre code a échoué',
                authFailed: 'Authentification échouée'
            },
            time: {
                HHmm: '24h',
                hhmma: 'AM/PM'
            }
        },
        viewOrder: {
            title: 'Commande',
            orderWithId: 'Commande #{id}',
            productInfoTitle: 'Produits',
            commands: {
                assignSuccessToast: 'La commande a été assignée avec succès',
                assignFailedToast: 'Une erreur est survenue lors de l’assignation de la commande, veuillez réessayer'
            },
            options: {
                touchup: 'Retouches',
                digitals: 'Fichiers digitals'
            },
            comments: {
                title: 'Commentaires',
                assignTo: 'Assigner à',
                deleteConfirmTitle: 'Effacer un commentaire',
                deleteConfirmMessage: 'Voulez-vous effacer ce commentaire?',
                deleteFailedToast: 'Une erreur est survenue lors de l’effacement du commentaire, veuillez réessayer',
                editFailedToast: 'Une erreur est survenue lors de la modification du commentaire, veuillez réessayer'
            },
            customer: {
                title: 'Contact',
                name: 'Nom',
                firstName: 'Prénom',
                lastName: 'Nom',
                streetAddress1: 'Adresse',
                streetAddress2: 'Adresse 2',
                city: 'Ville',
                state: 'État',
                province: 'Province',
                region: 'Région',
                postalCode: 'Code postal',
                country: 'Pays',
                phone: 'Téléphone',
                email: 'Courriel'
            },
            transaction: {
                title: 'Information de transaction',
                productTotal: 'Sous-total',
                shipping: 'Livraison',
                promo: 'Promotion',
                total: 'Total'
            },
            taxes: {
                canadian: {
                    gst: 'TPS',
                    pst: 'TVP',
                    hst: 'TVH',
                    qst: 'TVQ'
                }
            },
            shipping: {
                title: 'Information de livraison',
                option: 'Option de livraison',
                instruction: 'Instruction de livraison'
            },
            productList: {
                productPrice: 'Prix',
                quantity: 'Quantité',
                subtotal: 'Sous-total',
                comment: 'Commentaire'
            },
            touchups: {
                commentUp: 'Voir les détails des retouches en survolant une photo dans la section précédente.'
            },
            comment: 'Commentaire',
            versioning: {
                title: 'Photos',
                sendSelection: 'Envoyer la sélection',
                updateCustomer: 'Envoyer une notice au client',
                badges: {
                    versions: '0 photo | 1 photo | {count} photos',
                    published: '0 publiée | 1 publiée | {count} publiées'
                },
                prompts: {
                    notifyCustomerWithOpenPane: 'Voulez-vous mettre à jour les changements fait sur les photos avant' +
                        ' de notifier le client?',
                    notifyCustomerWithOpenPaneTitle: 'Sauvegarder les changements?'
                }
            },
            messages: {
                addCommentError: 'Erreur lors de l’ajout du commentaire, veuillez réessayer',
                loadPublishedPhotosError: 'Erreur lors du chargement des photos publiées, veuillez réessayer',
                notifyCustomerFailed: 'Une erreur est survenue lors de l\'envoie de la notification, veuillez' +
                    ' réessayer plus tard',
                notifyCustomerNoUpdate: 'Aucune modification n’a été faite sur les photos, le client ne sera pas' +
                    ' notifié',
                notifyCustomerSuccess: 'Le client a été notifié avec succès',
                orderLoadError: 'Une erreur est survenue lors du chargement de la commande, veuillez réessayer plus' +
                    ' tard',
                statusChangeSuccess: 'Le statut de la commande a été changé avec succès',
                statusChangeError: 'Une erreur est survenue lors du changement de statut de la commande,' +
                    ' veuillez réessayer',
                updateVersionError: 'Une erreur est survenue lors de la mise à jour des versions de photos,' +
                    ' veuillez réessayer'
            },
            production: {
                title: 'Production'
            }
        },
        workflows: {
            title: 'Flux de travail',
            single: 'Flux de travail',
            addBtn: 'Créer un flux de travail',
            tutorial: {
                whatIs: 'Optimisez votre temps en mettant en place des flux de travail qui donneront des options par' +
                    ' défaut à vos sessions lors de leur création',
                addBtn: 'Cliquez ici pour créer un nouveau flux de travail'
            }
        },
        reports: {
            sales: {
                series: {
                    sales: {
                        orderId: '# Commande',
                        sessionId: '# Session',
                        date: 'Date',
                        numberOfSubjects: 'Nombre de sujets',
                        subtotal: 'Sous-total',
                        shipping: 'Livraison',
                        promoRebate: 'Promotion',
                        taxes: 'Taxes',
                        returns: 'Retours',
                        returnFees: 'Frais de retour',
                        total: 'Total'
                    },
                    products: {
                        productId: '# Produit',
                        productInternalName: 'Nom interne',
                        quantity: 'Quantité'
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
            single: 'Code promo',
            addBtn: 'Créer des codes promos'
        }
    },

    pagination: {
        itemsPerPage: 'Objets par page'
    },

    photoSwap: {
        dragSwapInstruction: `Move pictures by grabbing them, or the handle bellow each pictures container,` +
            `and dragging them onto an other subject. Subjects can be reorganized with the handles on the left.`
    },

    timeline: {
        titles: {
            startDate: 'Date de départ',
            endDate: 'Date de fin'
        },
        prompt: {
            dateOutsideExpected: 'Date en dehors des attentes',
            dateOutsideExpectedMessage: `La date que vous avez saisie est antérieure à la date précédente ou` +
                ` supérieure à la date de fin. Assurez-vous que les informations sont correctes.`
        }
    },

    dataTable: {
        headers: {
            allowMix: 'Autoriser plusieurs codes de sujets',
            amount: 'Montant',
            assignee: 'Assigné',
            basePrice: 'Frais de manutention',
            customProduct: '@.capitalize:generic.atomic.customTemplate',
            campaign: 'Marketing',
            categories: 'Flux de travails',
            category: 'Catégorie',
            choices: 'Choix',
            code: 'Codes',
            codePrefix: 'Préfixe',
            count: 'nb. Utilisé',
            crosssell: '@.capitalize:generic.atomic.crosssell',
            date: 'Date',
            descriptionLocale: 'Descriptions',
            expireDate: 'Date d’expiration',
            featured: 'Populaires',
            firstName: 'Prénom',
            group: 'Groupe',
            groupPhotoAllow: 'Autoriser photo de groupe',
            id: 'ID',
            image: 'Image',
            images: 'Image par défaut',
            income: 'Revenu',
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
            isCustomProduct: 'Est un forfait personalizé',
            lastName: 'Nom',
            leadTime: 'Délais de production',
            method: 'Méthode de livraison',
            month: 'Mois',
            name: 'Nom',
            nameLocale: 'Noms',
            number: 'Référence',
            groupPhotoOnly: 'Seulement photo de groupe',
            options: 'Options',
            order: 'no. de Commande',
            paid: 'Payé',
            photos: 'Photos',
            popProducts: 'Produits populaires',
            price: 'Prix',
            priority: 'Priorité',
            productCategories: 'Catégorie',
            productCatalogs: 'Catalogues',
            products: 'Produits',
            publishDate: 'Date de publication',
            sales: 'Ventes',
            scalingPrice: 'Prix en échelle',
            session: 'Session',
            sessionColor: 'Couleur',
            sessions: 'Sessions',
            shippingGroups: 'Groupes de livraison',
            shippingOptions: 'Options de livraison',
            status: 'Statut',
            subjects: 'Sujets',
            tags: 'Balises',
            themeImages: 'Images',
            themes: 'Thèmes',
            total: 'Total',
            uniqueCode: 'UID',
            used: 'Utilisé',
            value: 'Valeur',
            variants: 'Variantes',
            visitor: 'Visiteurs',
            weight: 'Poids',
            workflow: 'Flux de travail',
            workflows: 'Flux de travail'
        },
        body: {
            status: {
                toDo: "À faire",
                touchups: "Retouches",
                inProgress: "En production",
                packaging: "Emballage",
                done: "envoi prêt",
                cancelled: "Annulé",
                shipped: "Envoyé",
                delivered: "Livré",
                returned: "Retourné",
                refunded: "Remboursé",
                error: "Erreur"
            },
            lastLogin: {
                na: 'Jamais connecté'
            },
            method: {
                fixedRate: 'Taux fixe',
                canadaPost: 'Postes Canada',
                pickUp: 'Ramassage',
                establishment: 'Établissement'
            }
        },
        placeholder: {
            noCrosssell: 'Aucune @:generic.atomic.crosssell',
            notCustomProduct: 'Pas un @:generic.atomic.customTemplate',
            notInCatalog: 'Pas dans un catalogue',
            noTheme: 'Sans thème',
            noRestriction: '(Permettre tout)',
            noExistingTheme: 'Aucun thème n’a encore été créé.',
            chooseCategory: 'Selectioner une catégorie',
            chooseSession: 'Selectioner une session',
            chooseWorkflow: 'Selectioner un flux de travail',
            createTags: 'Ajouter une balise',
            selectCategories: 'Selectioner au moins une catégorie'
        },
        help: {
            groupPhotoAllowHelp: 'Permettre à vos clients de sélectionner des photos de groupe pour ce produit.',
            allowMixHelp: 'Permettre à vos clients d’ajouter des images provenant de codes de sujets différents' +
                ' dans ce produit.',
            backgroundCategoriesPriorityHelp: 'Ceci va organiser vos catégories d’arrière-plan dans la boutique' +
                ' transactionnel. Une priorité de 0 apparaîtra avant une priorité de 1, et ainsi de suite.',
            basePriceHelp: 'Prix de base avant l’ajout de frais additionnels' +
                ' (frais de livraison, frais de retard, etc.)',
            customProductOptionsHelp: 'Les choix ajouteront un certain nombre de choix pour le client tandis que les options ajouteront de la variété. Pour un exemple plus concret de ce qui va se passer, référez-vous au tableau de droite pour voir ce que verra le client',
            campaignCodePrefixHelp: `Ce préfixe sera appliqué au début de chaque code créé pour les différencier par` +
                ` promotion dans le système. Par exemple, écrire PRE donnera des codes comme PRE-34534 ou PRE-22232.`,
            campaignValueHelp: `La valeur du rabais offert par ce code promotionnel.`,
            categoriesHelp: `Ceci est utilisé pour organiser les sessions dans un secteur de la` +
                ` photographie (École, Garderie, Sport, etc.) et applique une configuration par défaut.`,
            colorHelp: `Cette couleur est affichée sur les copies imprimées des commandes et sert à` +
                ` rapidement identifier à quelles sessions elles appartienent.`,
            crosssellHelp: 'Choisissez une option de @:generic.atomic.crosssell pour offrir à votre clientèle des' +
                ' suggestions de produits durant la navigation vers la page de confirmation de commande. ' +
                'Cliquez ici pour gérer vos @:generic.atomic.crosssells.',
            dateHelp: `Cette date marque le moment où les clients seront en mesure d'acheter des produits et de` +
                ` voir les photos associées à leur code de sujet en l'utilisant à travers le site de vente.`,
            expirationDateHelp: `Après cette date, les codes de sujet associés à la session ne seront plus actifs.` +
                ` Un client utilisant son code après cette date ne pourra donc plus acheter de produits avec celui-ci` +
                ` ou voir les photos associées à travers le site.`,
            shippingOptions: {
                basePriceHelp: `Prix de base avant l'ajout de frais additionnels` +
                    ` (frais de livraison, frais de retard, etc.)`,
                leadTimeHelp: 'Le temps approximatif en jours que vous estimez pour qu’une commande soit envoyée à' +
                    ' vos clients.',
                nameLocaleHelp: 'Nom de l\'option de livraison affiché à vos clients.',
                shippingMethodHelp: `Choisissez entre les différentes méthodes de livraison pour offrir à vos clients` +
                    ` des options d'expédition flexibles.`
            },
            internalNameHelp: 'Cet identifiant sera utilisé à l’interne et doit être unique. Il ne sera pas afficher' +
                ' à vos clients, c’est simplement un nom utilitaire pour vous aider dans votre organisation.',
            customProductHelp: 'Permettez des expériences d’achat personnalisées en offrant à vos clients de' +
                ' personnaliser leurs ensembles. Cette fonctionnalité améliore la satisfaction et l’engagement' +
                ' des clients en offrant des combinaisons de choix flexibles. Vous pouvez définir les options' +
                ' disponibles dans l’ensemble et le nombre de choix que les clients peuvent faire.',
            groupPhotoOnlyHelp: 'Permettre uniquement des photos de groupe pour ce produit.',
            productCategoriesHelp: 'Améliorez la découverte de vos produits par vos clients en les catégorisant dans' +
                ' des sections organisées, telles que des idées cadeaux, des ensembles, et des favoris saisonniers,' +
                ' afin de simplifier l’expérience d’achat.',
            productCategoriesNamesHelp: `Les noms apparaissant sur le site pour séparer les produits en catégories.`,
            productCatalogsProductHelp: 'Sélectionnez les produits que vous voulez ajouter à ce catalogue de' +
                ' produits. Les catalogues de produits permettent de regrouper les produits et de les ajouter en un' +
                ' seul clic à une session.',
            productProductCatalogsHelp: 'Ajoutez le produit à des catalogues. Les catalogues de produits permettent' +
                ' de regrouper les produits et de les ajouter en un seul clic à une session.',
            productPriorityHelp: 'Ordre dans lequel les produits apparaîtront sur la boutique pour vos clients' +
                ' (un produit avec une priorité de 1 apparaîtra après une priorité de 0). Si deux produits ont la' +
                ' même priorité, ils seront au même niveau, et seront placés arbitrairement entre eux.',
            productCategoriesPriorityHelp: 'Ordre dans lequel les catégories apparaîtront sur la boutique pour vos' +
                ' clients (une catégorie avec une priorité de 1 apparaîtra après une priorité de 0). Si deux' +
                ' catégories ont la même priorité, elles seront au même niveau, et seront placées' +
                ' arbitrairement entre elles.',
            scalingPriceHelp: `Option pour réduire le prix payé par article additionel. Le dernier prix entré sera` +
                ` appliqué sur chaque article additionel passé ce point. Vous devez séparer chaque prix par une` +
                ` virgule (,) Par exemple:\nVous avez un produit dont les prix en échelle sont appliqués en tant` +
                ` que 20, 15, 10. Un client choisit d’acheter ce produit 4 fois.\nLe prix sera alors calculé` +
                ` comme suit: \n1er article: 20$ \n2e article: 15$ \n3e article: 10$ \n4e article: 10$ \nTotal` +
                ` des articles: 55$`,
            shippingGroupsHelp: `La collection d'options de livraison que vous voulez utiliser pour cette session` +
                ` Vous pouvez ajouter des options à travers le menu + si nécessaire.`,
            subjectCodeHelp: `Ce code sera utilisé par le client pour récupérer les photos associées au sujet` +
                ` en l'entrant à l'endroit approprié sur le site d'achat.`,
            themesHelp: `Les thèmes sont des variations appliquées sur les produits pour les personnaliser. ` +
                `Vous pourriez par exemple avoir une tasse que vous offrez en couleur brune ou verte; dans un` +
                ` tel cas, les thèmes seraient “vert” et “brun”.`
        },
        messages: {
            noResultsFilter: 'Aucun résultat ne correspond à votre recherche, essayez de modifier vos filtres ou de ' +
                'les enlever'
        }
    },

    errorPage: {
        400: {
            title: 'Mauvaise demande',
            message: 'Il y a eu un problème avec votre demande.'
        },
        401: {
            title: 'Non autorisé',
            message: 'Vous n’êtes pas autorisé à accéder à cette page.'
        },
        403: {
            title: 'Interdit',
            message: 'Vous n’avez pas la permission d’accéder à cette page.'
        },
        404: {
            title: 'Pas trouvé',
            message: 'La page que vous recherchez n’existe pas'
        },
        500: {
            title: 'Erreur interne du serveur',
            message: 'Le serveur a rencontré une erreur interne ou une mauvaise configuration et n’a pas pu' +
                ' traiter votre demande.'
        }
    },

    toastMessages: {
        ERROR_DELETING: 'Erreur lors de la suppression d’objets.',
        SERVER_ERROR_CREATE: 'Une erreur est survenue en performant une opération sur le serveur. (erreur 104)',
        SERVER_ERROR_READ: 'Une erreur est survenue en performant une opération sur le serveur. (erreur 105)',
        SERVER_ERROR_UPDATE: 'Une erreur est survenue en performant une opération sur le serveur. (erreur 106)',
        SERVER_ERROR_DELETE: 'Une erreur est survenue en performant une opération sur le serveur. (erreur 107)',
        SERVER_READER_ERROR_READ: 'Une erreur est survenue en performant une opération sur le serveur. (erreur 108)',
        UNKNOWN_ERROR: 'Une erreur inconnue s’est produite',
        USER_EXIST: 'L’utilisateur existe déjà',
        USER_OR_PASS_OR_TOKEN_INCORRECT: 'Les informations que vous avez saisies ne sont pas valides, veuillez' +
            ' vérifier à nouveau',
        SELF_DELETE: 'Vous ne pouvez pas vous effacer vous-même',
        SELF_ARCHIVE: 'Vous ne pouvez pas vous archiver vous-même'
    },

    toastGuiMessages: {
        successCancel: 'L’opération a été annulée avec succès',
        successUpdate: 'Les informations ont été mises à jour avec succès'
    },

    generic: {
        atomic: {
            crosssell: 'vente croisée',
            crosssells: 'ventes croisées',
            customTemplate: 'modèle personnalisé',
            customTemplates: 'modèles personnalisés',
            product: 'produit',
            internalName: 'identifiant unique interne',
            internalNames: 'identifiants uniques internes',
            products: 'produits',
            session: 'session',
            sessions: 'sessions'
        },
        blank: ' ',
        ui: {
            activate: 'Activer',
            add: 'Ajouter',
            apply: 'Appliquer',
            archive: 'Archiver',
            assignee: 'Responsable',
            available: 'Disponible',
            back: 'Retour',
            blankSelect: 'Sélectionner',
            cancel: 'Annuler',
            changeAvatar: 'Changer l’avatar',
            changePassword: 'Changer mot de passe',
            clear: 'Effacer',
            close: 'Fermer',
            confirm: 'Confirmer',
            continue: 'Continuer',
            copy: 'Copier',
            create: 'Créer',
            crud: {
                create: 'Créer {activity}',
                update: 'Modifier {item}',
                delete: 'Effacer {item}'
            },
            dateFrom: 'Après',
            dateRange: 'Par intervalle de date',
            dateTo: 'Avant',
            deactivate: 'Déactiver',
            delete: 'Effacer',
            disabled: 'désactivé',
            documentation: 'Voir la documentation',
            download: 'Télécharger',
            dropFile: 'Déposez un fichier ici ou cliquez pour téléverser',
            edit: 'Modifier',
            edited: 'Modifié',
            email: 'Courriel',
            enabled: 'activé',
            error: 'Erreur',
            fieldMissing: 'Veuillez remplir tous les champs avant de procéder',
            finish: 'Terminer',
            help: 'Aide',
            info: 'Information',
            invite: 'Inviter',
            item: 'item | item | items',
            manage: 'Gérer',
            more: 'Plus',
            na: 'N/A',
            name: 'Nom',
            new: context => context.gender === 'm' ? 'Nouveau' : 'Nouvelle',
            next: 'Suivant',
            no: 'Non',
            none: 'Aucun',
            ok: 'Ok',
            option: 'Option',
            phone: 'Téléphone',
            placeholders: {
                comment: 'Ajouter un commentaire',
                noAssignee: 'Non-assigné'
            },
            primary: 'Primaire',
            print: 'Imprimer',
            printLabel: 'Imprimer l’étiquette',
            printProductTag: 'Imprimer produits',
            quantity: 'Quantité',
            reset: 'Réinitialiser',
            resetTotp: 'Réactualiser 2FA',
            revert: 'restorer',
            save: 'Enregistrer',
            scaledPrice: 'Prix en échelle',
            scalingPrice: 'Prix en échelle',
            searchPlaceholder: 'Rechercher par ID ou nom',
            selected: 'sélectionné | sélectionné | sélectionnés',
            send: 'Envoyer',
            showAdvancedContext: 'Avancé',
            showFilters: 'Filtres',
            skip: 'Sauter',
            status: 'État',
            submit: 'Soumettre',
            success: 'Succès',
            swap: 'Échanger',
            textCopied: 'Texte copié au presse-papier avec succcès',
            textFailedCopy: 'Le texte n’a pas pu être copié',
            unarchive: 'Désarchiver',
            unnamed: 'Sans nom',
            unnamedYet: 'À être nommé',
            update: 'Mettre à jour',
            upload: {
                csv: 'Téléverser un fichier CSV',
                photos: 'Téléverser des photos'
            },
            validateCode: 'Valider le Code',
            view: 'Voir',
            viewLess: 'Voir moins',
            viewMore: 'Voir plus',
            warning: 'Attention',
            yes: 'Oui'
        },
        filter: {
            filter: 'Filter',
            archived: 'Archivé',
            assignee: 'Responsable',
            boolean: {
                true: 'Oui',
                false: 'Non',
                unset: 'Les deux'
            },
            category: 'Catégorie',
            categories: 'Catégories',
            created: 'Créé',
            date: 'Date',
            datePreset: {
                today: 'Aujourd’hui',
                yesterday: 'Hier',
                thisWeek: 'Cette semaine',
                lastWeek: 'La semaine dernière',
                thisMonth: 'Ce mois-ci',
                lastMonth: 'Mois dernier',
                this3Month: 'Ces 3 mois',
                last3Month: '3 derniers mois',
                this6Month: 'Ces 6 mois',
                last6Month: '6 derniers mois',
                thisYear: 'Cette année',
                lastYear: 'L’année dernière',
                thisQuarter: 'Ce trimestre',
                lastQuarter: 'Dernier trimestre',
                custom: 'Custom'
            },
            deliveryOption: 'Option de livraison',
            expireDate: 'Date d’expiration',
            featured: 'En vedette',
            group: 'Groupe',
            isCustomProduct: '@.capitalize:generic.atomic.customTemplate',
            paid: 'Payé',
            price: 'Prix',
            productCatalogs: 'Catalogues',
            publishDate: 'Date de publication',
            role: 'Rôle',
            search: 'Rechercher',
            searchContactEmail: 'Courriel de client',
            searchContactName: 'Nom de client',
            searchContactPhone: 'Téléphone de client',
            searchSubjectName: 'Nom de sujet',
            session: '@.capitalize:generic.atomic.session | @.capitalize:generic.atomic.session | @.capitalize:generic.atomic.sessions',
            shippingGroups: 'Groupes de livraison',
            status: 'État',
            tags: 'Balises',
            title: 'Filtres',
            typeTitle: 'Type',
            types: {
                contains: 'Contient',
                containsNot: 'Ne contient pas',
                is: 'Est',
                isNot: 'N’est pas'
            },
            workflow: 'Flux de travail',
            placeholder: {
                group: 'Groupe',
                search: 'Rechercher',
                searchContactEmail: 'Courriel de client',
                searchContactName: 'Nom de client',
                searchContactPhone: 'Téléphone de client',
                searchSubjectName: 'Nom de sujet'
            }
        },
        tax: {
            gst: 'TPS',
            qst: 'TVQ',
            pst: 'PST',
            hst: 'HST'
        },
        tollFree: 'Sans-frais',
        or: 'ou',
        and: 'et',
        default: 'Défaut',
        prompt: {
            archive: 'Êtes-vous sûr de vouloir archiver {item}?',
            cancelTitle: 'Annuler les changements',
            cancel: 'Êtes-vous sûr de vouloir annuler les changements effectés?',
            destructive: 'Êtes-vous sûr de vouloir supprimer {item}?',
            warningTitle: 'Avertissement!',
            leavingWarningMessage: 'Vous êtes sur le point de partir. Êtes-vous sûr de vouloir quitter cette page?' +
                ' Les progrès seront perdus.',
            requiredFieldTitle: 'Champs obligatoires manquants',
            requiredField: 'Veuillez remplir tous les champs obligatoires pour procéder.'
        },
        province: 'Province',
        state: 'État',
        provinces: {
            qc: 'Québec',
            on: 'Ontario',
            nl: 'Terre-Neuve-et-Labrador',
            pe: 'Île-du-Prince-Édouard',
            ns: 'Nouvelle-Écosse',
            nb: 'Nouveau-Brunswick',
            mb: 'Manitoba',
            sk: 'Saskatchewan',
            ab: 'Alberta',
            bc: 'Colombie-Britannique',
            yt: 'Yukon',
            nt: 'Territoires du Nord-Ouest',
            nu: 'Nunavut'
        },
        addressUnitTypes: {
            apartment: 'Appartement',
            office: 'Bureau',
            suite: 'Suite'
        },
        daysOfWeek: {
            monday: 'Lundi',
            tuesday: 'Mardi',
            wednesday: 'Mercredi',
            thursday: 'Jeudi',
            friday: 'Vendredi',
            saturday: 'Samedi',
            sunday: 'Dimanche'
        },
        shippingMethods: {
            fixedRate: 'Taux fixe',
            canadaPost: 'Postes Canada',
            pickUp: 'Ramassage',
            establishment: 'Livraison à l’établissement'
        },
        units: {
            days: 'Jours',
            grams: 'g',
            dollar: '$'
        }
    },

    login: {
        login: {
            header: 'Connexion',
            auth: {
                title: 'Authenticateur',
                description: `Entrez le code à 6 chiffres de votre application d'authentification`
            },
            linkForgotPassword: 'Mot de passe oublié?',
            button: 'Connexion',
            buttonContinue: 'Suivant'
        },
        changePassword: {
            placeholder: {
                email: 'nom@courriel.com',
                code: '0000 0000',
                password: 'mot de passe'
            },
            newPassHeader: 'Entrer votre mot de passe',
            emailHeader: 'Entrer votre courriel',
            codeHeader: 'Entrer votre code de réinitalisation',
            emptyPassword: 'Veuillez entrer un mot de passe.',
            instructions: 'Un code sera envoyé à votre email une fois le bouton enfoncé. ' +
                'Veuillez entrer le code dans le champ qui apparaîtra ici et vous pourrez alors' +
                ' modifier votre mot de passe.',
            sendCode: 'Envoyer le code',
            shortPassword: 'Le mot de passe doit comporter plus de {min} caractères.',
            passwordConfirmFailed: 'Ces mots de passe ne correspondaient pas. Réessayer.',
            invalidCode: 'Le code saisi est invalide. Veuillez revoir le code ou en demander un nouveau.'
        },
        invite: {
            acceptInviteHeader: 'Accepter l’invitation',
            setAuthHeader: 'Authentificateur de configuration',
            setAuthMessage: 'Pour sécuriser votre compte, veuillez configurer un mot de passe à usage unique (TOTP)' +
                ' à l’aide d’une application d’authentification:',
            setAuthMessage2: 'Cela ajoute une couche de sécurité supplémentaire à votre compte.',
            setAuthStep1: 'Téléchargez une application d’authentification comme Google Authenticator ou Authy sur' +
                ' votre téléphone ou votre tablette.',
            setAuthStep2: 'Scannez le code QR affiché ci-dessous avec l’application.',
            setAuthStep3: 'Saisissez le code à 6 chiffres qui apparaît sur l’application dans le champ ci-dessous.',
            welcome: 'Bienvenue sur',
            welcomeUser: 'Bienvenue {name}',
            totpFailed: 'Le code saisi est invalide. Veuillez vérifier le code sur votre application d’authentification.',
            credentialsInvalid: 'Le nom ou le mot de passe que vous avez saisi n’est pas valide. ' +
                'Veuillez vérifier vos informations.'
        },
        password: {
            minLength: 'Doit contenir au moins {length} caractères',
            lowerCase: 'Doit contenir au moins {number} minuscule',
            upperCase: 'Doit contenir au moins {number} majuscule',
            numbers: 'Doit contenir au moins {number} numéros',
            symbols: 'Doit contenir au moins {number} symbole',
            match: 'Les mots de passe correspondents'
        },
        resetTotp: {
            instructions: 'Veuillez scanner le code QR avec votre application d’authentification et entrer' +
                ' le code généré.'
        }
    },

    subscriptionPlans: {
        standard: {
            name: 'standard'
        },
        advance: {
            name: 'avancé'
        },
        pro: {
            name: 'pro'
        },
        generic: {
            priceByMonth: '$ /Mois',
            storageValue: 'GB de storage'
        }
    },

    order: {
        unassigned: 'Non assigné',
        status: {
            pending: 'En attente',
            'photo-processing': 'Traitement des photos',
            'ready-to-print': 'Prêt à imprimer',
            'printing-packaging': 'Impression et emballage',
            'ready-to-ship': 'Prêt à expédier',
            completed: 'Complété',
            'correction-requested': 'Demande de correction',
            cancelled: 'Annulé'
        }
    }
}
