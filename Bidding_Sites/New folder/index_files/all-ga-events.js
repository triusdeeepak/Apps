var gaTrackEvent=function(a,b){switch(a){case'FreemarketBidsOffer':_gaq.push(['_trackEvent','FreemarketBids','Offer']);break;case'FreemarketBidsRegular':_gaq.push(['_trackEvent','FreemarketBids','Regular']);break;case'FreemarketBidsBINConfirm':_gaq.push(['_trackEvent','FreemarketBids','BINConfirm']);break;case'FreemarketBidsBIN':_gaq.push(['_trackEvent','FreemarketBids','BIN']);break;case'FreemarketSignupModal':_gaq.push(['_trackEvent','FreemarketSignUp','SignUpModal']);break;case'FreemarketVerificationEmail':_gaq.push(['_trackEvent','FreemarketVerification','Email']);break;case'FreemarketVerificationMeta':_gaq.push(['_trackEvent','FreemarketVerification','Meta']);break;case'FreemarketVerificationCname':_gaq.push(['_trackEvent','FreemarketVerification','Cname']);break;case'ContestCategoriesPopular':_gaq.push(['_trackEvent','ContestCategories','popular',b]);break;case'PostContestCategory':_gaq.push(['_trackEvent','Post Contest','Category',b]);break;case'PostContestSubcategory':_gaq.push(['_trackEvent','Post Contest','Sub-Category',b]);break;case'ContestNotificationPCB':_gaq.push(['_trackEvent','Contest_notification','PCB',b]);break;case'ContestOpenViewMoreOld':_gaq.push(['_trackEvent','ContestOpen','ViewMoreOld']);break;case'ContestOpenViewMoreNew':_gaq.push(['_trackEvent','ContestOpen','ViewMoreNew']);break;case'ContestOpenContestInfo':_gaq.push(['_trackEvent','ContestOpen','ContestInfo']);break;case'ContestOpenViewMore':_gaq.push(['_trackEvent','ContestOpen','ViewMore']);break;case'ContestCompletedContestName':_gaq.push(['_trackEvent','ContestCompleted','ContestName']);break;case'ContestCompletedFreelancerUsername':_gaq.push(['_trackEvent','ContestCompleted','FreelancerUsername']);break;case'ContestCompletedEntryImage':_gaq.push(['_trackEvent','ContestCompleted','EntryImage']);break;case'ContestWelcomePostContest':_gaq.push(['_trackEvent','Contest_welcome','Post_Contest']);break;case'ContestPageviewDraft':_gaq.push(['_trackEvent','contest_pageview','state','DRAFT']);break;case'ContestPageviewPending':_gaq.push(['_trackEvent','contest_pageview','state','PENDING']);break;case'ContestPageviewClosed':_gaq.push(['_trackEvent','contest_pageview','state','CLOSED']);break;case'ContestPageviewActive':_gaq.push(['_trackEvent','contest_pageview','state','ACTIVE']);break;case'ContestUpsellFeaturedContestViewT7841':_gaq.push(['_trackEvent','Contest_upsell_featured','ContestView_T7841']);break;case'ContestUpsellTopContestContestViewT7841':_gaq.push(['_trackEvent','Contest_upsell_top_contest','ContestView_T7841']);break;case'ContestDraftNewsfeed':_gaq.push(['_trackEvent','contest_draft','click','newsfeed_10min']);break;case'ContestDraftNotification':_gaq.push(['_trackEvent','contest_draft','click','notification_10min']);break;case'ContestAwardNewsfeed':_gaq.push(['_trackEvent','contest_award','click','newsfeed']);break;case'ContestSimilarActiveUsername':_gaq.push(['_trackEvent','ContestSimilar','Active','Username']);break;case'ContestSimilarActiveViewMore':_gaq.push(['_trackEvent','ContestSimilar','Active','ViewMore']);break;case'ContestSimilarActiveList':_gaq.push(['_trackEvent','CompletedContest','Active','List']);break;case'CompletedContestActiveList':_gaq.push(['_trackEvent','ContestSimilar','Active','List']);break;case'CompletedContestActiveUsername':_gaq.push(['_trackEvent','CompletedContest','Active','Username']);break;case'GoalNonHireMePosted':_gaq.push(['_trackEvent','Goal','NonHireMe Posted']);break;case'GoalHireMeReposted':_gaq.push(['_trackEvent','Goal','Hireme Project Reposted']);break;case'GoalNonHireMeReposted':_gaq.push(['_trackEvent','Goal','NonHireme Project Reposted']);break;case'GoalHireMePosted':_gaq.push(['_trackEvent','Goal','HireMe Posted']);break;case'GoalProjectUpgraded':_gaq.push(['_trackEvent','Goal','Project Upgraded']);break;case'GoalBuyFreeExam':_gaq.push(['_trackEvent','Goal','Buy Free Exam']);break;case'GoalBuyPaidExam':_gaq.push(['_trackEvent','Goal','Buy Paid Exam']);break;case'GoalBidProject':_gaq.push(['_trackEvent','Goal','Bid on Project']);break;case'GoalUserRegistrationEmployer':_gaq.push(['_trackEvent','Goal','User Registration Employer']);break;case'GoalUserRegistrationFreelancerBoth':_gaq.push(['_trackEvent','Goal','User Registration Freelancers / Both']);break;case'GoalFacebookSignup':_gaq.push(['_trackEvent','Goal','Facebook Signup']);break;case'GoalMembershipUpgrade':_gaq.push(['_trackEvent','Goal','Membership Upgrade']);break;case'GoalContestCreated':_gaq.push(['_trackEvent','Goal','Contest Created']);break;case'GoalContestPaid':_gaq.push(['_trackEvent','Goal','Contest Paid']);break;case'GoalEntriesSubmitted':_gaq.push(['_trackEvent','Goal','Entries Submitted']);break;case'GoalServicesBought':_gaq.push(['_trackEvent','Goal','Services Bought']);break;case'GoalServicesPosted':_gaq.push(['_trackEvent','Goal','Services Posted']);break;case'GoalDepositMoney':_gaq.push(['_trackEvent','Goal','Deposit Money']);break;case'GoalProjectShowcaseReposted':_gaq.push(['_trackEvent','Goal','Project Showcase Reposted'])}};typeof define=='function'&&define.amd?define('all-ga-events',[],gaTrackEvent):window.gaTrackEvent=new gaTrackEvent